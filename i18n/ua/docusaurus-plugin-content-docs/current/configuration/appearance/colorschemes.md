---
sidebar_position: 1
---

# Colorscheme

## Switching colors

To switch color schemes on the fly, use `<leader>sc` (`:Telescope colorscheme`)

You can also press `<leader>sp` to cycle through colorschemes with a preview.

To change the color scheme permanently, modify `config.lua`

```lua
lvim.colorscheme = "desert"
```

## Installing colorschemes

You can add any colorscheme you like. Just add a plugin with the colorscheme of your choice. For more information on installing plugins [look here.](../plugins/plugins.md)

[This is a list](https://github.com/rockerBOO/awesome-neovim#colorscheme) of colorschemes with tree-sitter support

## Customizing some colors

You can customize the highlight groups by overriding them in an autocommand.
To find the group you want to change use `leader s H` (`:Telescope highlights`),
`:TSHighlightCapturesUnderCursor` or `:Inspect`

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

You can also override parameters in builtin colorscheme; e.g., to have winseparator colored in orange in tokyonight scheme:

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

## Transparent Windows

If you're using transparent windows enable this setting

```lua
lvim.transparent_window = true
```

That enables the following settings

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
