# Autocommands

To set up autocommands use the native nvim api `vim.api.nvim_create_autocmd`, or use the helper Lunarvim table `lvim.autocmds` which will be passed to [define_autocmds()](https://github.com/LunarVim/lunarvim/blob/3475f7675d8928b49c85878dfc2912407de57342/lua/lvim/core/autocmds.lua#L177) automatically.
```lua
lvim.autocmds = {
    "BufEnter", -- see `:h autocmd-events`
      pattern = { "*.json", "*.jsonc" },
      command = "setlocal wrap",
    },
  },
}
```
This will run a command at a given event for the given filetype.

An example using the nvim api could look like this:
```lua
vim.api.nvim_create_autocmd("BufEnter", {
	  pattern = { "*.json", "*.jsonc" },
	  -- enable wrap mode for json files only
	  command = "setlocal wrap",
})
```
You can also add custom mappings using `command`. For example the following autocommand would add the mapping `<space><space>` to `cpp` and `hpp` files to switch between source and header files using `ClangdSwitchSourceHeader`:

```lua
lvim.autocommands = {
  {
    "BufWinEnter",
    {
      pattern = { "*.cpp", "*.hpp" },
      command = ":nnoremap <silent> <space><space> :ClangdSwitchSourceHeader<CR>",
    }
  },
}
```

To view help on autocommands: `:h autocmd`

Here is a [list of events](https://tech.saigonist.com/b/code/list-all-vim-script-events.html)
