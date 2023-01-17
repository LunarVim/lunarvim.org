---
sidebar_position: 1
---

# 配色方案

## 更换配色


如需实时更换配色，输入以下命令：

```vim
:Telescope colorscheme
```

您也可以使用`<leader>sp` 来预览所有的配色方案。

如需永久改变配色方案，则修改`config.lua`

```lua
lvim.colorscheme = 'desert'
```

## 安装配色方案

您可以按照自己的喜好添加任意配色方案，只需添加配色方案的插件即可。关于安装插件的更多信息请参考[此处](../plugins/plugins.md)。

[此列表](https://github.com/rockerBOO/awesome-neovim#colorscheme) 有带tree-sitter支持的配色方案。

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
