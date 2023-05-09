---
sidebar_position: 1
---

# 术语

## Language features

### [LSP (语言服务器协议)](https://microsoft.github.io/language-server-protocol/)

- **LSP** - 在源代码编辑器和LSP服务器之间使用的协议。该协议的目标是实现对编程语言的支持，独立于任何给定的编辑器和IDE。

- **LSP server** - provides programming language-specific features like code completion, syntax
  highlighting and marking of warnings and errors, as well as refactoring routines.

### [DAP (调试适配协议)](https://microsoft.github.io/debug-adapter-protocol/)

用于debug支持的协议。

### [Treesitter](https://tree-sitter.github.io/tree-sitter/)

可以为源文件构建语法树，且源文件被编辑时更新语法树。在neovim中它被用于实现语法高亮和缩进。
