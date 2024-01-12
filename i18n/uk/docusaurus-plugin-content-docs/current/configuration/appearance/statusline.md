---
sidebar_position: 2
---

# Рядок стану

LunarVim використовує `lualine` як рядок стану за умовчанням.

Конфігурація така ж, як у lualine з повною підтримкою. Перегляньте [Lualine README.md](https://github.com/nvim-lualine/lualine.nvim/blob/master/README.md)

Крім того, LunarVim надає попередньо визначені стилі (макет) і компоненти.

## Стиль

LunarVim приймає три варіанти стилю,

- lvim
  > Типовий макет LunarVim
- default
  > Типовий макет Lualine
- none
  > Порожній макет

Для встановлення іншого стилю ніж `"lvim" style`,

```lua
lvim.builtin.lualine.style = "default" -- або "none"
```

<br />

## Компонент

Ви можете використовувати будь-який компонент, який надає `lualine` і `LunarVim`.

**Компоненти LunarVim**

`mode`, `branch`, `filename`, `diff`, `python_env`, `diagnostics`, `treesitter`, `lsp`, `location`, `progress`, `spaces`, `encoding`, `filetype`, `scrollbar`

Для встановлення компоненту `lualine's "diff"` до секції c `"default" style`,

```lua
lvim.builtin.lualine.style = "default"
lvim.builtin.lualine.sections.lualine_c = { "diff" }
```

Для встановлення компонентів "spaces" і "location" `LunarVim` до секції y, а компонент "mode" `lualine` до секції a стилю `"lvim",

```lua
-- не треба встановлювати style = "lvim"
local components = require("lvim.core.lualine.components")

lvim.builtin.lualine.sections.lualine_a = { "mode" }
lvim.builtin.lualine.sections.lualine_y = {
  components.spaces,
  components.location
}
```

<br />

## Тема

LunarVim автоматично визначає поточну колірну схему та встановлює її як тему.

Щоб змінити схему кольорів, перегляньте [Кольорова схема](./colorschemes.md)

Якщо відповідної теми немає, буде використано тему `"auto", надану lualine.

Якщо ви хочете використовувати іншу тему, встановіть її вручну,

```lua
lvim.builtin.lualine.options.theme = "gruvbox"
```

Для редагування наявної теми:

```lua
local custom_gruvbox = require "lualine.themes.gruvbox_dark"
custom_gruvbox.insert.b = { fg = custom_gruvbox.insert.a.bg, gui = "bold" }
custom_gruvbox.visual.b = { fg = custom_gruvbox.visual.a.bg, gui = "bold" }
custom_gruvbox.replace.b = { fg = custom_gruvbox.replace.a.bg, gui = "bold" }
custom_gruvbox.command.b = { fg = custom_gruvbox.command.a.bg, gui = "bold" }

lvim.builtin.lualine.options.theme = custom_gruvbox
```

Для створення власної теми:

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

## Зворотний вилкик (колбек)

Функція зворотного виклику доступна для більшої гнучкості.

Вона запуститься після завершення налаштування,

```lua
lvim.builtin.lualine.on_config_done = function(lualine)
  local config = lualine.get_config()
  local components = require "core.lualine.components"

  config.sections.lualine_x[3].color.bg = "#2c2c2c"
  table.remove(config.sections.lualine_x, 2) -- видалення іконки treesitter
  table.insert(config.sections.lualine_x, components.location)
  lualine.setup(config)
end
```

Якщо ви хочете вийти за межі конфігурації, перевірте [налаштування jimcornmell](https://github.com/jimcornmell/lvim/blob/main/lua/user/lualine.lua) як довідник.
