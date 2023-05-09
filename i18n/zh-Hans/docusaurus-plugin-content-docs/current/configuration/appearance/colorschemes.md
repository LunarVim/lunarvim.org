---
sidebar_position: 1
---

# 配色方案

## 更换配色

想快速切换配色方案，可以使用 `<leader>sc` (`:Telescope colorscheme`)

你也可以使用 `<leader>sp` 循环预览色彩主题。

如需永久改变配色方案，则修改`config.lua`

```lua
lvim.colorscheme = "desert"
```

## 安装配色方案

您可以按照自己的喜好添加任意配色方案，只需添加配色方案的插件即可。关于安装插件的更多信息请参考[此处](/configuration/plugins/plugins.md)。

[此列表](https://github.com/rockerBOO/awesome-neovim#colorscheme) 有带tree-sitter支持的配色方案。


## 自定义颜色

你可以通过在自动命令覆盖它们来定制高亮组。
找到你想改变的组，然后使用 `leader s H` (`:Telescope highlights`),
`:TSHighlightCapturesUnderCursor` 或者 `:Inspect`

```lua
lvim.autocommands = {
  {
    { "ColorScheme" },
    {
      pattern = "*",
      callback = function()
        -- change `Normal` to the group you want to change
        -- and `#ffffff` to the color you want
        -- see `:h nvim_set_hl` for more options
        vim.api.nvim_set_hl(0, "Normal", { bg = "#ffffff", underline = false, bold = true })
      end,
    },
  },
}
```

你也可以覆盖内置主题的颜色参数。
例如：to have winseparator colored in orange in tokyonight scheme:

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

## 透明窗口

如果您在使用透明的窗口，需要打开这个设置：

```lua
lvim.transparent_window = true
```

这会允许以下设置：

```lua
cmd "au ColorScheme * hi Normal ctermbg=none guibg=none"
cmd "au ColorScheme * hi SignColumn ctermbg=none guibg=none"
cmd "au ColorScheme * hi NormalNC ctermbg=none guibg=none"
cmd "au ColorScheme * hi MsgArea ctermbg=none guibg=none"
cmd "au ColorScheme * hi TelescopeBorder ctermbg=none guibg=none"
cmd "au ColorScheme * hi NvimTreeNormal ctermbg=none guibg=none"
cmd "let &fcs='eob: '"
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/OOr1qM17Lds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>
