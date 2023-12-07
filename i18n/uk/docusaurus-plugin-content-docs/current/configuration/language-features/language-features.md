# Language features

LunarVim strives to have support for all major languages. This is made possible by utilizing some of the great plugins
in Neovim's ecosystem. Such plugins are [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) for LSP support, and
[Null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim) to provide support for handling external formatters, such
as [prettier](https://github.com/prettier/prettier) and [eslint](https://github.com/eslint/eslint). Furthermore,
LunarVim integrates with [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) to provide rich syntax
highlighting and other language parsing magic.

If your language is not supported please check the following links and file a ticket.

- Check if LSP support is available in the lspconfig [repo](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)
- Check if your linter or formatter is available in the null-ls [repo](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md)
- Check if your syntax is supported in the treesitter [repo](https://github.com/nvim-treesitter/nvim-treesitter)

## At a glance

You can use the following commands to check some information about any language servers that you have configured.

- `:LvimInfo`

  - Contains information about all the servers attached to the buffer you are editing and their current capabilities, such as formatting and go-to definition support. It also includes information related to any linters and formatters that are, or can be, configured.
  - keybind: `<leader>Li`

- `:LspInfo`

  - Contains basic information about all the servers that are running.
  - keybind: `<leader>li`

- `:Mason`

  - Contains information about all the servers that you can manage with [mason](https://github.com/williamboman/mason.nvim).
  - keybind: `<leader>lI`
