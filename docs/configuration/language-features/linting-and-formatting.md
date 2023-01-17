---
sidebar_position: 2
---

# Linting and formatting

Setting a formatter will override the language server formatting capabilities.

The easiest way is to reference the linter/formatter/code_actions by their names. See the [null-ls
docs](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) for a full list
of builtins with their names.

```lua
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup {
  { name = "black" },
  {
    name = "prettier",
    ---@usage arguments to pass to the formatter
    -- these cannot contain whitespace
    -- options such as `--line-width 80` become either `{"--line-width", "80"}` or `{"--line-width=80"}`
    args = { "--print-width", "100" },
    ---@usage only start in these filetypes, by default it will attach to all filetypes it supports
    filetypes = { "typescript", "typescriptreact" },
  },
}

local linters = require "lvim.lsp.null-ls.linters"
linters.setup {
  { name = "flake8" },
  {
    name = "shellcheck",
    args = { "--severity", "warning" },
  },
}

local code_actions = require "lvim.lsp.null-ls.code_actions"
code_actions.setup {
  {
    name = "proselint",
  },
}
```

## Installing linters/formatters

You can use `:Mason` to install most of the supported linters and formatters, if you can't find what
you're looking for refer to the each tool's respective manual for installation steps

## Lazy-loading the linter/formatter/code_actions setup

By default, all null-ls providers are checked on startup. If you want to avoid that or want to only set up the provider when you opening the associated file-type,
then you can use [filetype plugins](configuration/ftplugin.md) for this purpose.

Let's take `python` as an example:

1. create a file called `python.lua` in the `$LUNARVIM_CONFIG_DIR/after/ftplugin` folder

2. add the following snippet

```lua
local linters = require "lvim.lsp.null-ls.linters"
linters.setup { { command = "flake8", filetypes = { "python" } } }
```

## Formatting on save

To enable formatting on save:

```lua
lvim.format_on_save = true
```
