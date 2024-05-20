---
sidebar_position: 2
---

# Keybindings

See the [keybinds overview](../beginners-guide/keybinds-overview.md) for most commonly used keybinds.

If you want to (re)map a keybinding that starts with `<leader>`, use [Whichkey Bindings](#whichkey-bindings).
If the bindings are LSP (intellisense) related, use [LSP Bindings](#lsp-bindings).
In all other cases, use [NeoVim mappings](#neovim-mappings)

## Leader Key

The default leader key is `Space`. This can be changed with the following

```lua
lvim.leader = "space"
```

## Listing what is mapped

Use `<Leader>sk` to view different keybinding currently set.

To see if a particular key has already been bound:

```lua
:verbose map <TAB>
```

- :nmap for normal mode mappings
- :vmap for visual mode mappings
- :imap for insert mode mappings

Or just list every mapping

```lua
:map
```

## NeoVim mappings

### (Re)mapping keys

To modify or add a keymapping:

```lua
  -- X closes a buffer
  lvim.keys.normal_mode["<S-x>"] = ":BufferKill<CR>"

  -- Centers cursor when moving 1/2 page down
  lvim.keys.normal_mode["<C-d>"] = "<C-d>zz"
```

### Removing default mappings

To remove keymappings set by LunarVim:

```lua
  lvim.keys.normal_mode["<C-h>"] = false
  lvim.keys.normal_mode["<C-j>"] = false
  lvim.keys.normal_mode["<C-k>"] = false
  lvim.keys.normal_mode["<C-l>"] = false
```

## LSP Bindings

To modify your LSP keybindings use `lvim.lsp.buffer_mappings.[normal|visual|insert]_mode`.

### (Re)map a key

Map your own functionality

```lua
lvim.lsp.buffer_mappings.normal_mode['H'] = { vim.lsp.buf.hover, "Show documentation" }
```

Or map default functionality to a different key

```lua
lvim.lsp.buffer_mappings.normal_mode['gk'] = lvim.lsp.buffer_mappings.normal_mode['K']
```

### Remove a binding

LSP bindings take precedence over regular keybindings.
So in order to use a key for a regular binding, we have to remove it first

```lua
lvim.lsp.buffer_mappings.normal_mode['K'] = nil
lvim.keys.normal_mode['K'] = "<Cmd>echo Okay!<CR>"
```

## Whichkey Bindings

To add or remap keybindings for whichkey use `lvim.builtin.which_key.mappings`.
The leader key is already included.

### Single mapping

Map a single key.

```lua
lvim.builtin.which_key.mappings["P"] = {
  "<cmd>lua require'telescope'.extensions.project.project{}<CR>", "Projects"
}
```

As stated above, the leader key is included. So for the above example, the keybinding becomes `<leader>P`

### Removing a single mapping

Remove a single Whichkey keybind

```lua
lvim.builtin.which_key.mappings['w'] = {}
```

Adding a key to an existing menu/submenu.

```lua
lvim.builtin.which_key.mappings["tP"] = {
  "<cmd>lua require'telescope'.extensions.project.project{}<CR>", "Projects"
}
```

### Submenu mapping

Map a group of keys. `Definitions` would be triggered by pressing `<Leader>td`. The name for this menu would appear as `Trouble`.

```lua
lvim.builtin.which_key.mappings["t"] = {
  name = "Trouble",
  r = { "<cmd>Trouble lsp_references<cr>", "References" },
  f = { "<cmd>Trouble lsp_definitions<cr>", "Definitions" },
  d = { "<cmd>Trouble lsp_document_diagnostics<cr>", "Diagnostics" },
  q = { "<cmd>Trouble quickfix<cr>", "QuickFix" },
  l = { "<cmd>Trouble loclist<cr>", "LocationList" },
  w = { "<cmd>Trouble lsp_workspace_diagnostics<cr>", "Diagnostics" },
}
```

### Replace all whichkey mappings

To clear all whichkey bindings and replace all mappings with your own, use this form.

```lua
lvim.builtin.which_key.mappings = {
  ["c"] = { "<cmd>BufferClose!<CR>", "Close Buffer" },
  ["e"] = { "<cmd>NvimTreeToggle<CR>", "Explorer" },
  ["h"] = { '<cmd>let @/=""<CR>', "No Highlight" },

  p = {
    name = "Plugins",
    i = { "<cmd>Lazy install<cr>", "Install" },
    s = { "<cmd>Lazy sync<cr>", "Sync" },
    S = { "<cmd>Lazy clear<cr>", "Status" },
    u = { "<cmd>Lazy update<cr>", "Update" },
  },
}
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/BdoizYjJHis" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## [toggleterm](https://github.com/akinsho/toggleterm.nvim) (terminal) mappings

To change the terminal mapping:

```lua
lvim.builtin.terminal.open_mapping = "<c-t>"
```
