---
sidebar_position: 1
---

# 语言服务器

_This page needs improvement_

## Installing and updating a server

### Automatic server installation

By default, most supported language servers will get automatically installed once you open the supported file-type, e.g, opening a Python file for the first time will install `Pyright` and configure it automatically for you.

- configuration option

```lua
lvim.lsp.automatic_servers_installation = true
```

Please refer to [mason](https://github.com/williamboman/mason.nvim) to see the updated full list of currently available servers.

To install a supported language server:

```md
:LspInstall `<your_language_server>`
```

You can also toggle `<:Mason>` and interactively choose which servers to install.

## Server override

`lvim.lsp.automatic_configuration.skipped_servers` contains a list of servers that will **not** be automatically configured by default, for example only `tsserver` is allowed for JS-family languages, and when a language has more than one server available, then the most popular one is usually chosen.

:::tip

Overriding a server will completely bypass the lsp-installer, so you would have to manage the installation for any of those servers manually.

:::

See the current list

```lua
:lua print(vim.inspect(lvim.lsp.automatic_configuration.skipped_servers))
```

See the default list in [`lua/lvim/lsp/config.lua`](https://github.com/LunarVim/LunarVim/blob/master/lua/lvim/lsp/config.lua#L1-L40)

:::tip

Any changes to `lvim.lsp.automatic_configuration.skipped_servers` **must** be followed by `:LvimCacheReset` to take effect.

:::

## Server setup

LunarVim uses [filetype plugins](/configuration/ftplugin.md) to enable lazy-loading the setup of a language server. A template generator is used to create `ftplugin` files and populate them with the setup call.

- configuration option

```lua
lvim.lsp.templates_dir = join_paths(get_runtime_dir(), "after", "ftplugin")
```

A typical setup call with default arguments

```lua
-- edit this file by running `:lua vim.cmd("edit " .. lvim.lsp.templates_dir .. "/lua.lua")`
require("lvim.lsp.manager").setup("sumneko_lua")
```

:::tip

You can quickly find these files by running `<leader>Lf` -> "Find LunarVim Files"

:::

### Overriding the default setup options

Add the server you wish to configure manually to `lvim.lsp.automatic_configuration.skipped_servers`.

```lua
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "pyright" })
```

Now you can set it up manually using the builtin [lsp-manager](https://github.com/LunarVim/LunarVim/blob/rolling/lua/lvim/lsp/manager.lua)

```lua
--- list of options that should take precedence over any of LunarVim's defaults
--- check the lspconfig documentation for a list of all possible options
local opts = {}
require("lvim.lsp.manager").setup("pyright", opts)
```

Alternatively, set it up using the `lspconfig` API directly

```lua
--- check the lspconfig documentation for a list of all possible options
local opts = {}
require("lspconfig")["pyright"].setup(opts)
```

## Server settings

To set a setting for your language server:

```vim
:LspSettings <TAB>
:LspSettings <NAME_OF_LANGUAGE_SERVER>
```

This will create a file in `$LUNARVIM_CONFIG_DIR/lsp-settings`, to enable persistent changes. Refer to the documentation of [nlsp-settings](https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md) for a full updated list of supported language servers.

:::tip

Make sure to install `jsonls` for autocompletion.

:::
