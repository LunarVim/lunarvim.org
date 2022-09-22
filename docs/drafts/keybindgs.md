# Recommended Keybindings

## Python

```lua
lvim.autocommands = {
  {
    "Filetype",
    {
      pattern = "python",
      command = "nnoremap <leader>r <cmd>lua require('toggleterm.terminal').Terminal:new {cmd='python ' .. vim.fn.expand('%') .. ';read', hidden =false}:toggle()<CR>",
    },
  },
  {
    "Filetype",
    {
      pattern = "python",
      command = "nnoremap <leader>t <cmd>lua require('toggleterm.terminal').Terminal:new {cmd='python -m unittest;read', hidden =false}:toggle()<CR>",
    },
  }
}
lvim.builtin.which_key.mappings["r"] = "Run"
lvim.builtin.which_key.mappings["t"] = "Test"
```

### Django

```lua
lvim.builtin.terminal.execs = {
  { "lazygit", "gg", "LazyGit" },
  { "python manage.py test;read", "jt", "Django tests" },
  { "python manage.py makemigrations;read", "jm", "Django makemigrations" },
  { "python manage.py migrate;read", "ji", "Django migrate" },
}
```
