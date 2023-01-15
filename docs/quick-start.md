---
sidebar_position: 2
---

# Quick start

After installing you should be able to start LunarVim with the `lvim` command.

## Tree-sitter

To install syntax highlighting and treesitter support for your language:

```vim
:TSInstall <TAB>
```

**NOTE:** `<TAB>` indicates that you should press the `<TAB>` key and cycle through your options

Not all languages are supported. For a list of supported languages [look here](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages)

<iframe width="560" height="315" src="https://www.youtube.com/embed/hkxPa5w3bZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## Language Server

To install a Language Server for your language:

```vim
:LspInstall <TAB>
```

Sometimes the language server for your language will not have an obvious name. For instance, the language server for ruby is solargraph. Metals is the language server for scala, etc. To find the corresponding language server for your language [look here](https://github.com/williamboman/nvim-lsp-installer)

## Formatting and Linting

Formatting and Linting is not supported by some LSPs by default.
This needs to be installed / configured separately.

See [languages](./languages/README.md) where each language with its formatting and linting can be addressed.

## Next Steps

- Learn how to [configure LunarVim](./configuration/README.md)
- See the [keybind overview](./keybind-overview.md)
- Learn about the [installed plugins](./plugins/README.md)
- Learn how to set up LunarVim for your [language](./languages/README.md)
