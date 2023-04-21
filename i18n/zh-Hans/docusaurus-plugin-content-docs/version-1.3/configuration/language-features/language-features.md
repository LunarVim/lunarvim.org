# 语言特性

LunarVim努力支持所有主要的语言。这是通过利用Neovim生态系统中的一些强大的插件来实现的。[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig)中这些插件提供LSP支持，[Null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim)提供处理额外格式的支持，如[prettier](https://github.com/prettier/prettier) 和 [eslint](https://github.com/eslint/eslint)。

此外，LunarVim与[nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)集成，提供丰富的语法高亮和其他语言解析功能。

如果你的语言不被支持，请前往以下链接并提交报告：

- 前往lspconfig [仓库](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)检查是否有LSP支持
- 前往null-ls [仓库](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md)检查提示器或格式化工具是否可用
- 前往treesitter [仓库](https://github.com/nvim-treesitter/nvim-treesitter)检查语法是否被支持

## 信息一览

你可以使用以下命令来预览所配置的语言服务器的一些信息。

- `:LvimInfo`

  -  包含当前缓冲区相关的所有语言服务器的信息，以及它们当前的功能，如格式化和跳转到定义等支持。它还包括与任何已经配置或可以配置的提示器和格式化器有关的信息。
  - 键位: `<leader>Li`

- `:LspInfo`

  - 包含所有正在运行的语言服务器的基本信息。
  - 键位: `<leader>li`

- `:Mason`

  - 包含可以用[mason](https://github.com/williamboman/mason.nvim)管理的所有语言服务器的信息。
  - 键位: `<leader>lI`
