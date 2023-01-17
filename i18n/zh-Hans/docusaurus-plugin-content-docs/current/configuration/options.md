---
sidebar_position: 1
---

# 可选项

[可选项](#neovim-options)用来配置编辑器。
[变量](#neovim-variables)用来配置vimscript插件。

## Neovim 可选项

参考 [`:help lua-guide-options`](https://neovim.io/doc/user/lua-guide.html#lua-guide-options) 以获取更多信息。

- 设置可选项:

  ```lua
  vim.opt.{option} = {value}
  ```

- 查看可选项:

  ```lua
  vim.opt.{option}:get()
  ```

### 示例可选项

```lua
vim.opt.cmdheight = 2 -- more space in the neovim command line for displaying messages
vim.opt.guifont = "monospace:h17" -- the font used in graphical neovim applications
vim.opt.shiftwidth = 2 -- the number of spaces inserted for each indentation
vim.opt.tabstop = 2 -- insert 2 spaces for a tab
vim.opt.relativenumber = true -- relative line numbers
vim.opt.wrap = true -- wrap lines

-- use treesitter folding
vim.opt.foldmethod = "expr"
vim.opt.foldexpr = "nvim_treesitter#foldexpr()"
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/8O6o3p7CN7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## Neovim 变量

参考 [`:help lua-guide-variables`](https://neovim.io/doc/user/lua-guide.html#lua-guide-variables) 以获取更多信息。

- 要获取和设置变量，请使用：

  ```lua
  vim.g.{name} -- global variables (g:)
  vim.b.{name} -- variables for the current buffer (b:)
  vim.w.{name} -- variables for the current window (w:)
  vim.t.{name} -- variables for the current tabpage (t:)
  vim.v.{name} -- predefined Vim variables (v:)
  vim.env.{name} -- environment variables defined in the editor session
  ```
