---
sidebar_position: 2
---

# 提示器和格式化

_This page needs improvement_

Set a linter/formatter, this will override the language server formatting capabilities (if it exists)

```lua
local formatters = require("lvim.lsp.null-ls.formatters")
formatters.setup({
	{ command = "black" },
	{
		command = "prettier",
		args = { "--print-width", "100" },
		filetypes = { "typescript", "typescriptreact" },
	},
})

local linters = require("lvim.lsp.null-ls.linters")
linters.setup({
	{ command = "flake8" },
	{
		command = "shellcheck",
		args = { "--severity", "warning" },
	},
	{
		command = "codespell",
		filetypes = { "javascript", "python" },
	},
})

local code_actions = require("lvim.lsp.null-ls.code_actions")
code_actions.setup({
	{
		command = "proselint",
	},
})
```

Another method is to reference the linter/formatter/code_actions by their names, as referenced in [null-ls docs](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md), if you do not want to customize the command

```lua
local formatters = require("lvim.lsp.null-ls.formatters")
formatters.setup({
	{ name = "black" },
})

local linters = require("lvim.lsp.null-ls.linters")
linters.setup({
	{ name = "flake8" },
	{ name = "shellcheck" },
	{
		name = "codespell",
		filetypes = { "javascript", "python" },
	},
})

local code_actions = require("lvim.lsp.null-ls.code_actions")
code_actions.setup({
	{
		name = "proselint",
	},
})
```

This will lookup the provided name in the builtin configurations of `null_ls` and apply them. It can be considered equivalent to `null_ls.builtins.diagnostics.{name}`/`null_ls.builtins.formatting.{name}`/`null_ls.builtins.code_actions.{name}`

_Note: Formatters' or Linters' or Code Actions installation is not managed by LunarVim. Refer to the each tool's respective manual for installation steps._

## Custom arguments

It's also possible to add custom arguments for each linter/formatter/code_actions.

```lua
local formatters = require("lvim.lsp.null-ls.formatters")
formatters.setup({
	{
		command = "prettier",
		---@usage arguments to pass to the formatter
		-- these cannot contain whitespace, options such as `--line-width 80` become either `{'--line-width', '80'}` or `{'--line-width=80'}`
		args = { "--print-width", "100" },
	},
})

local linters = require("lvim.lsp.null-ls.linters")
linters.setup({
	{
		command = "shellcheck",
		---@usage arguments to pass to the formatter
		-- these cannot contain whitespace, options such as `--line-width 80` become either `{'--line-width', '80'}` or `{'--line-width=80'}`
		args = { "--severity", "warning" },
	},
})

local code_actions = require("lvim.lsp.null-ls.code_actions")
code_actions.setup({
	{
		command = "proselint",
		args = { "--json" },
	},
})
```

_Note: remember that arguments cannot contains spaces, options such as `--line-width 80` become either `{'--line-width', '80'}` or `{'--line-width=80'}`._

## Multi languages per linter/formatter

By default a formatter will attach to all the filetypes it supports.

```lua
local formatters = require("lvim.lsp.null-ls.formatters")
formatters.setup({
	{
		command = "prettier",
		---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.
		filetypes = { "typescript", "typescriptreact" },
	},
})
```

_Note: removing the `filetypes` argument will allow the formatter to attach to all the default filetypes it supports._

## Multi linters/formatters/code_actions per language

There are no restrictions on setting up multiple formatters per language

```lua
local formatters = require("lvim.lsp.null-ls.formatters")
formatters.setup({
	{
		{ command = "black", filetypes = { "python" } },
		{ command = "isort", filetypes = { "python" } },
	},
})

local linters = require("lvim.lsp.null-ls.linters")
linters.setup({
	{
		command = "codespell",
		---@usage specify which filetypes to enable. By default a providers will attach to all the filetypes it supports.
		filetypes = { "javascript", "python" },
	},
})

local code_actions = require("lvim.lsp.null-ls.code_actions")
code_actions.setup({
	{
		command = "proselint",
		args = { "--json" },
		filetypes = { "markdown", "tex" },
	},
})
```

## Lazy-loading the linter/formatter/code_actions setup

By default, all null-ls providers are checked on startup. If you want to avoid that or want to only set up the provider when you opening the associated file-type,
then you can use [filetype plugins](configuration/ftplugin.md) for this purpose.

Let's take `python` as an example:

1. create a file called `python.lua` in the `$LUNARVIM_CONFIG_DIR/after/ftplugin` folder
2. add the following snippet

```lua
local linters = require("lvim.lsp.null-ls.linters")
linters.setup({ { command = "flake8", filetypes = { "python" } } })
```

## Formatting on save

To enable formatting on save:

```lua
lvim.format_on_save = true
```
