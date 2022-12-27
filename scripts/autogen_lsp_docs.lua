local M = {}

local utils = require("lvim.utils")
local in_headless = #vim.api.nvim_list_uis() == 0
-- local servers_filetype_map = require("mason-lspconfig.mappings.filetype")
-- local supported_filetypes = vim.fn.sort(vim.tbl_keys(servers_filetype_map))
local sources = require("null-ls.sources")

local ft_to_filename = {
	["BUILD.bazel"] = "bazel",
}

local min_supported_filetypes = {
	"go",
	-- "java",
	-- "javascript",
	-- "json",
	-- "lua",
	-- "powershell",
	-- "python",
	-- "ruby",
	-- "rust",
	-- "scala",
	-- "hcl",
	-- "typescript",
}

local function get_supported_servers_map()
	local map = {}

	local configs = require("lspconfig.configs")
	-- Configs are lazy-loaded, tickle them to populate the `configs` singleton.
	for _, v in ipairs(vim.api.nvim_get_runtime_file("lua/lspconfig/server_configurations/*.lua", true)) do
		local module_name = v:gsub(".*/", ""):gsub("%.lua$", "")
		configs[module_name] = require("lspconfig.server_configurations." .. module_name)
	end

	for _, config in pairs(configs) do
		local filetypes = config.document_config.default_config.filetypes or {}
		for _, ft in pairs(filetypes) do
			map[ft] = map[ft] or {}
			table.insert(map[ft], config.name)
		end
	end
	return map
end

local servers_filetype_map = get_supported_servers_map()
local supported_filetypes = vim.fn.sort(vim.tbl_keys(servers_filetype_map))

local function append_file(path, data)
	local uv = vim.loop
	local file, success, error
	file, error = uv.fs_open(path, "a", 438)
	assert(file, error)
	success, error = uv.fs_write(file, table.concat(data, "\n"), -1)
	assert(success, error)
	success, error = uv.fs_close(file)
	assert(success, error)
end

local function table_to_md_list(tbl)
	local list = vim.tbl_map(function(value)
		return "- " .. value
	end, tbl)

	table.insert(list, "")
	return unpack(list)
end

function M.get_treesitter_info(ft)
	local parsers = require("nvim-treesitter.parsers")
	local parser_name = parsers.ft_to_lang(ft)

	if parsers.list[parser_name] then
		return {
			"### Syntax highlighting",
			"",
			"```vim",
			":TSInstall " .. parser_name,
			"```",
			"",
		}
	end

	return {}
end

function M.get_lsp_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local supported_servers = servers_filetype_map[ft] or {}
	if #supported_servers == 0 then
		return {}
	end

	local data = {
		"### Supported language servers",
		"",
		table_to_md_list(supported_servers),
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.get_formatters_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local supported_formatters = sources.get_supported(ft, "formatting")
	if vim.tbl_isempty(supported_formatters) then
		return {}
	end
	local data = {
		"### Supported formatters",
		"",
		table_to_md_list(supported_formatters),
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.get_linters_info(ft)
	ft = ft or vim.fn.expand("%:t:r")
	local supported_linters = sources.get_supported(ft, "diagnostics")
	if vim.tbl_isempty(supported_linters) then
		return {}
	end
	local data = {
		"### Supported linters",
		"",
		table_to_md_list(supported_linters),
	}
	if not in_headless then
		vim.api.nvim_command("let @+ = '" .. data .. "'")
		vim.fn.execute("put")
	end
	return data
end

function M.generate_doc_files(filetypes)
	for _, ft in ipairs(filetypes) do
		local filename = ft_to_filename[ft] or ft:gsub("%..*$", "") -- "yaml.ansible" -> "yaml"
		local path = "docs/languages/" .. filename .. ".md"
		local content = {}
		if require("lvim.utils").is_file(path) then
			content = { "", "## " .. ft, "" }
		else
			content = { "# " .. ft, "" }
		end

		vim.list_extend(content, M.get_treesitter_info(ft))
		vim.list_extend(content, M.get_lsp_info(ft))
		vim.list_extend(content, M.get_formatters_info(ft))
		vim.list_extend(content, M.get_linters_info(ft))
		append_file(path, content)
	end
end

function M.generate_doc_global_supported(filetypes)
	local file = "docs/languages/supported.md"
	for _, entry in ipairs(filetypes) do
		local info = { "## " .. entry, "" }
		local main = {}
		vim.list_extend(main, M.get_lsp_info(entry))
		vim.list_extend(main, M.get_formatters_info(entry))
		vim.list_extend(main, M.get_linters_info(entry))
		if #main > 0 then
			vim.list_extend(info, main)
			vim.list_extend(info, { "" })
			append_file(file, info)
		end
	end
end

function M.generate_supported_table(filetypes)
	filetypes = filetypes or min_supported_filetypes

	local supported_languages_info = {}

	for _, ft in ipairs(filetypes) do
		table.insert(supported_languages_info, {
			filetype = ft,
			servers = servers_filetype_map[ft] or nil,
			linters = sources.get_supported(ft, "diagnostics"),
			formatters = sources.get_supported(ft, "formatting"),
		})
	end
	utils.write_file("supported.lua", "return " .. vim.inspect(supported_languages_info), "w")
	local info_json = vim.json.encode(supported_languages_info)

	utils.write_file("supported.json", info_json, "w")
end

M.generate_doc_files(supported_filetypes)

-- -- generate a list of all supported filetypes
-- M.generate_supported_table(supported_filetypes)

-- -- generate a document listing all supported filetypes
-- M.generate_doc_global_supported(supported_filetypes)

return M
