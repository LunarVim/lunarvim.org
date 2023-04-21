---
sidebar_position: 1
---

# Options

[Options](#neovim-options) are used to configure the editor,
[variables](#neovim-variables) to configure vimscript plugins.

## Neovim options

See [`:help lua-guide-options`](https://neovim.io/doc/user/lua-guide.html#lua-guide-options) to learn more.

- To set options:

  ```lua
  vim.opt.{option} = {value}
  ```

- To get options:

  ```lua
  vim.opt.{option}:get()
  ```

### Example options

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

## Neovim variables

See [`:help lua-guide-variables`](https://neovim.io/doc/user/lua-guide.html#lua-guide-variables) to learn more.

- To get and set variables use:

  ```lua
  vim.g.{name} -- global variables (g:)
  vim.b.{name} -- variables for the current buffer (b:)
  vim.w.{name} -- variables for the current window (w:)
  vim.t.{name} -- variables for the current tabpage (t:)
  vim.v.{name} -- predefined Vim variables (v:)
  vim.env.{name} -- environment variables defined in the editor session
  ```
