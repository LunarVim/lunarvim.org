---
sidebar_position: 2
---

# Linting and formatting

Setting a formatter will override the language server formatting capabilities.

The easiest way is to reference the linter/formatter/code_actions by their names. See the [null-ls
docs](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md) for a full list
of builtins with their names.

Example:

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

- To enable formatting on save:

  ```lua
  lvim.format_on_save.enabled = true
  ```

- Only enable it for certain filetypes

  ```lua
  lvim.format_on_save.enabled = true
  lvim.format_on_save.pattern = { "*.lua", "*.py" }
  ```
  
## Registering custom linters/formatters

LunarVim supports all linters and formatters defined as builtins to null-ls, however there may be occasions where you want to run a linter/formatter that null-ls does not support.

Refer to various docs in the null-ls repo for details on [configuring built-in sources](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTIN_CONFIG.md) and [helpers for making builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/HELPERS.md#make_builtin).

:::tip
Do not load registered, custom linters/formatters in your [LunarVim config](https://www.lunarvim.org/docs/languages#lintingformatting) (i.e. in the `formatters.setup` block). Doing so will raise an error that a `builtin source could not be found`.
:::

Below is an example registering the [htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier) formatter:

```lua
local helpers = require("null-ls.helpers")
local FORMATTING = require("null-ls.methods").internal.FORMATTING
require("null-ls").register({
  --your custom sources go here
  helpers.make_builtin({
    name = "htmlbeautifier",
    meta = {
      url = "https://github.com/threedaymonk/htmlbeautifier",
      description = "A normaliser/beautifier for HTML that also understands embedded Ruby. Ideal for tidying up Rails templates."
    },
    method = FORMATTING,
    filetypes = { "eruby" },
    generator_opts = {
      command = "htmlbeautifier",
      args = {}, -- put any required arguments in this table
      to_stdin = true, -- instructs the command to ingest the file from STDIN (i.e. run the currently open buffer through the linter/formatter)
    },
    factory = helpers.formatter_factory,
  })
})
```
