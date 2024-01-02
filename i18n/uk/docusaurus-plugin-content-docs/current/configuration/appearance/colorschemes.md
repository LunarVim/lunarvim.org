---
sidebar_position: 1
---

# Кольорова схема

## Перемикання кольорів

Щоб перемикати колірні схеми на льоту, використовуйте `<leader>sc` (`:Telescope colorscheme`)

Ви також можете натиснути `<leader>sp`, щоб циклічно переходити між кольоровими схемами з попереднім переглядом.

Щоб остаточно змінити схему кольорів, змініть `config.lua`

``` lua
lvim.colorscheme = "пустеля"
```

## Встановлення схем кольорів

Ви можете додати будь-яку кольорову схему, яка вам подобається. Просто додайте плагін із схемою кольорів на ваш вибір. Для отримання додаткової інформації про встановлення плагінів [перегляньте тут.](../plugins/plugins.md)

[Це список](https://github.com/rockerBOO/awesome-neovim#colorscheme)схем кольорів із підтримкою tree-sitter

## Налаштування деяких кольорів

Ви можете налаштувати групи виділення, замінивши їх у автокоманді.
Щоб знайти групу, яку ви хочете змінити, скористайтеся `leader s H` (`:Telescope highlights`),,
`:TSHighlightCapturesUnderCursor` бо `:Inspect`

```lua
lvim.autocommands = {
  {
    { "ColorScheme" },
    {
      pattern = "*",
      callback = function()
        -- змініть `Normal` на групу, яку ви хочете змінити
        -- та `#ffffff` на бажаний колір
        -- дивіться `:h nvim_set_hl` для більшої кількості налаштувань
        vim.api.nvim_set_hl(0, "Normal", { bg = "#ffffff", underline = false, bold = true })
      end,
    },
  },
}
```

Ви також можете змінити параметри у вбудованій схемі кольорів; наприклад, мати winseparator помаранчевого кольору в схемі tokyonight:

```lua
lvim.colorscheme = "tokyonight"
lvim.builtin.theme.name = "tokyonight"
lvim.builtin.theme.tokyonight.options.on_highlights = function(hl, c)
	hl.WinSeparator = {
		fg = c.orange,
		bold = true,
	}
end
```

## Прозорі вікна

Якщо ви використовуєте прозорі вікна, увімкніть це налаштування:

```lua
lvim.transparent_window = true
```

Це вмикає наступні налаштування:

```lua
cmd "au ColorScheme * hi Normal ctermbg=none guibg=none"
cmd "au ColorScheme * hi SignColumn ctermbg=none guibg=none"
cmd "au ColorScheme * hi NormalNC ctermbg=none guibg=none"
cmd "au ColorScheme * hi MsgArea ctermbg=none guibg=none"
cmd "au ColorScheme * hi TelescopeBorder ctermbg=none guibg=none"
cmd "au ColorScheme * hi NvimTreeNormal ctermbg=none guibg=none"
cmd "let &fcs='eob: '"
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/OOr1qM17Lds" title="Відео-програвавч YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
