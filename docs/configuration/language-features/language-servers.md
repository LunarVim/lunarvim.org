---
sidebar_position: 1
---

# Language servers

LunarVim uses [filetype plugins](/configuration/ftplugin.md) to enable lazy-loading the setup of a
language server. A template generator is used to create `ftplugin` files and populate them with the
setup call.

`lvim.lsp.automatic_configuration.skipped_servers` contains a list of servers that will **not** be
automatically configured by default, for example only `tsserver` is allowed for JS-family languages,
and when a language has more than one server available, then the most popular one is usually chosen.

:::info

Any changes to `lvim.lsp.automatic_configuration.skipped_servers` **must** be followed by `:LvimCacheReset` to take effect.

:::

## Installing and updating a server

### Automatic installation

By default, most supported language servers will get automatically installed once you open the
supported file-type, e.g, opening a Python file for the first time will install `pyright` and
configure it automatically for you.

### Manual installation

```lua
lvim.lsp.automatic_servers_installation = false
```

Please refer to [mason](https://github.com/williamboman/mason.nvim) to see the updated full list of
currently available servers.

To install a supported language server:

```vim
:LspInstall `<your_language_server>`
```

You can also open `:Mason` and interactively choose which servers to install (press `g?` for keybindings).

### Updating a server

Open `:Mason`, select a server and update it with `u`.
You can update all mason packages with `<S-u>`.

## Changing the default server

To use a different server than the default one add the default server to the `skipped_servers` list
and remove the one you want to use.

:::info

Any changes to `lvim.lsp.automatic_configuration.skipped_servers` **must** be followed by `:LvimCacheReset` to take effect.

:::

Example:

- Use `jedi_language_server` instead of `pyright`

  ```lua
  -- add `pyright` to `skipped_servers` list
  vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "pyright" })
  -- remove `jedi_language_server` from `skipped_servers` list
  lvim.lsp.automatic_configuration.skipped_servers = vim.tbl_filter(function(server)
    return server ~= "jedi_language_server"
  end, lvim.lsp.automatic_configuration.skipped_servers)
  ```

## Overriding settings

### Using :LspSettings

To set settings for your language server:

```vim
:LspSettings <TAB>
```

Example:

1. `:LspSettings sumneko_lua`

2. ```json
   {
     "Lua.hint.enable": false
   }
   ```

This will create a file in `/lsp-settings` to enable persistent changes.
Refer to the documentation of [nlsp-settings](https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md)
for a full updated list of supported language servers.

:::tip

Install `jsonls` LSP server for autocompletion.

:::

### By overriding the setup

Add the server you wish to configure manually to `lvim.lsp.automatic_configuration.skipped_servers`.

```lua
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "sumneko_lua" })
```

:::info

Any changes to `lvim.lsp.automatic_configuration.skipped_servers` **must** be followed by `:LvimCacheReset` to take effect.

:::

Now you can set it up manually using the builtin [lsp manager](https://github.com/LunarVim/LunarVim/blob/master/lua/lvim/lsp/manager.lua)
in `$LUNARVIM_CONFIG_DIR/ftplugin/<filetype>.lua`

Example:

```lua
-- $LUNARVIM_CONFIG_DIR/ftplugin/lua.lua
local opts = {
  settings = {
    Lua = { hint = { enable = false } },
  },
}
require("lvim.lsp.manager").setup("sumneko_lua", opts)
```
