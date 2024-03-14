# Angular

## Install Language Server

```vim
:LspInstall angularls
```

## Configure LunarVim

The `angularls` server is overridden by default. So it needs to be
[manually configured](/configuration/language-features/language-servers.md#server-override).

### Setup

Add this to your `config.lua` file:

```lua
require("lvim.lsp.manager").setup("angularls")
```

For more info about the LSP such as default values [checkout this](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#angularls).

:::note

For Angular projects with version lesser than 9 (pre Ivy) you should provide the LSP with the `--viewEngine` flag.

:::
