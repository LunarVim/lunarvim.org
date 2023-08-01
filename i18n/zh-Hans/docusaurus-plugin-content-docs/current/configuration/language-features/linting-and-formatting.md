---
sidebar_position: 2
---

# 提示器和格式化

如果设置一个格式化器，将覆盖语言服务器本身的格式化能力。

最简单的方法是通过名字来引用 linter/formatter/code_actions。请参阅[null-ls 文档](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md)，了解带有名称的完整内置程序列表。

例子:

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

## 安装linters/formatters

你可以使用 `:Mason` 来安装大多数支持的linters和formatters，如果你找不到你要找的东西，请参考每个工具各自的手册，了解安装步骤。

## 懒加载linter/formatter/code_actions设置

默认情况下，所有的null-ls提供者都在启动时被检查。如果你想避免这一点，或者想只在打开相关文件类型时设置提供者，那么你可以使用[filetype plugins](configuration/ftplugin.md)来实现这一目的。

让我们以 `python` 为例：

1. 在 `$LUNARVIM_CONFIG_DIR/after/ftplugin` 文件夹中创建一个名为 `python.lua` 的文件

2. 添加以下代码片段
   ```lua
   local linters = require "lvim.lsp.null-ls.linters"
   linters.setup { { command = "flake8", filetypes = { "python" } } }
   ```

## 保存时格式化

- 要在保存时启用格式化：

  ```lua
  lvim.format_on_save.enabled = true
  ```

- Only enable it for certain filetypes：

  ```lua
  lvim.format_on_save.enabled = true
  lvim.format_on_save.pattern = { "*.lua", "*.py" }
  ```
  
## 注册自定义 linters/formatters

LunarVim支持所有定义为null-ls的内建程序的linters和formatters，然而在某些场合下，你可能想运行一个null-ls不支持的linter/formatter。

详情请参考null-ls repo中的各种文档，了解[configuring built-in sources](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTIN_CONFIG.md)和[helpers for making builtins](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/HELPERS.md#make_builtin)。

:::tip

不要在你的[LunarVim config](https://www.lunarvim.org/docs/languages#lintingformatting)中（i.e. 在 `formatters.setup` 块中）加载已注册的、自定义的linter/formatters。这样做会引起一个错误，即 `builtin source could not be found`。

:::

下面是一个注册[htmlbeautifier](https://github.com/threedaymonk/htmlbeautifier)formatter的例子

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
