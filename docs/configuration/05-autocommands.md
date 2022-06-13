# Autocommands

To set up autocommands use the native nvim api `vim.api.nvim_create_autocmd` or the Lunarvim table `lvim.autocmds` to load a list of autocommands.
Autocommands are defined in the form
```lua
lvim.autocmds = {
    "BufEnter",
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
