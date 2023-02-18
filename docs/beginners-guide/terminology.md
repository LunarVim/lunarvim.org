---
sidebar_position: 1
---

# Terminology

## Language features

### [LSP (Language Server Protocol)](https://microsoft.github.io/language-server-protocol/)

- **LSP** - protocol for use between source code editors and LSP servers. The goal of the protocol is to allow
  programming language support to be implemented and distributed independently of any given editor
  or IDE.

- **LSP server** - provides programming language-specific features like code completion, syntax
  highlighting and marking of warnings and errors, as well as refactoring routines.

### [DAP (Debug Adapter Protocol)](https://microsoft.github.io/debug-adapter-protocol/)

Protocol used for debugging support

### [Treesitter](https://tree-sitter.github.io/tree-sitter/)

Tree-sitter can build a syntax tree for a source file and update the syntax tree as the source file
is edited. In neovim it's used for syntax highlighting and indentation.
