---
sidebar_position: 2
---

# 状态栏

LunarVim 使用 `lualine` 作为默认的状态栏。

配置与lualine相同且完全兼容。参考[Lualine README.md](https://github.com/nvim-lualine/lualine.nvim/blob/master/README.md)。

此外，LunarVim 还提供预定义的风格（布局）和组件。

## 风格

LunarVim有三种风格可供选择：

- lvim
  > LunarVim的默认布局
- default
  > Lualine的默认布局
- none
  > 空布局

如需设置不同于`"lvim" style`的其他风格：

```lua
lvim.builtin.lualine.style = "default" -- or "none"
```

<br />

## 组件

您可以使用`lualine`和`LunarVim`提供的任何组件。

**LunarVim的组件**

`mode`, `branch`, `filename`, `diff`, `python_env`, `diagnostics`, `treesitter`, `lsp`, `location`, `progress`, `spaces`, `encoding`, `filetype`, `scrollbar`
`
设置 `lualine` 的 `"diff"` 组件到 `"default"` 风格的c部分：

```lua
lvim.builtin.lualine.style = "default"
lvim.builtin.lualine.sections.lualine_c = { "diff" }
```

设置 `LunarVim`的`"spaces"` 和 `"location"` 组件到y部分， `lualine`的`"mode"` 组件到`"lvim"`风格的a部分：

```lua
-- no need to set style = "lvim"
local components = require("lvim.core.lualine.components")

lvim.builtin.lualine.sections.lualine_a = { "mode" }
lvim.builtin.lualine.sections.lualine_y = {
  components.spaces,
  components.location
}
```

<br />

## 主题

LunarVim自动检测当前配色方案并将其设置为主题。

要更改配色方案，请参考 [Colorscheme](./colorschemes.md)

如果没有匹配的主题，它将回退到lualine提供的`"auto"`主题。

如果您想使用不同的主题，请手动设置：

```lua
lvim.builtin.lualine.options.theme = "gruvbox"
```

定制现有主题：

```lua
local custom_gruvbox = require "lualine.themes.gruvbox_dark"
custom_gruvbox.insert.b = { fg = custom_gruvbox.insert.a.bg, gui = "bold" }
custom_gruvbox.visual.b = { fg = custom_gruvbox.visual.a.bg, gui = "bold" }
custom_gruvbox.replace.b = { fg = custom_gruvbox.replace.a.bg, gui = "bold" }
custom_gruvbox.command.b = { fg = custom_gruvbox.command.a.bg, gui = "bold" }

lvim.builtin.lualine.options.theme = custom_gruvbox
```

创建自己的主题：

```lua
local colors = {
  color2 = "#0f1419",
  color3 = "#ffee99",
  color4 = "#e6e1cf",
  color5 = "#14191f",
  color13 = "#b8cc52",
  color10 = "#36a3d9",
  color8 = "#f07178",
  color9 = "#3e4b59",
}

lvim.builtin.lualine.options.theme = {
  normal = {
    c = { fg = colors.color9, bg = colors.color2 },
    a = { fg = colors.color2, bg = colors.color10, gui = "bold" },
    b = { fg = colors.color4, bg = colors.color5 },
  },
  insert = {
    a = { fg = colors.color2, bg = colors.color13, gui = "bold" },
    b = { fg = colors.color4, bg = colors.color5 },
  },
  visual = {
    a = { fg = colors.color2, bg = colors.color3, gui = "bold" },
    b = { fg = colors.color4, bg = colors.color5 },
  },
  replace = {
    a = { fg = colors.color2, bg = colors.color8, gui = "bold" },
    b = { fg = colors.color4, bg = colors.color5 },
  },
  inactive = {
    c = { fg = colors.color4, bg = colors.color2 },
    a = { fg = colors.color4, bg = colors.color5, gui = "bold" },
    b = { fg = colors.color4, bg = colors.color5 },
  },
}
```

<br />

## 回调函数

回调函数可以提供更大的灵活性。

它将在配置完成时运行：

```lua
lvim.builtin.lualine.on_config_done = function(lualine)
  local config = lualine.get_config()
  local components = require "core.lualine.components"

  config.sections.lualine_x[3].color.bg = "#2c2c2c"
  table.remove(config.sections.lualine_x, 2) -- remove treesitter icon
  table.insert(config.sections.lualine_x, components.location)
  lualine.setup(config)
end
```

如果您想跟深入地配置，参考[jimcornmell's setup](https://github.com/jimcornmell/lvim/blob/main/lua/user/lualine.lua)。