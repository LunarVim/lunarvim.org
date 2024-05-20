---
sidebar_position: 2
---

# 键位

最常使用的键位请参考 [键位总览](../beginners-guide/keybinds-overview.md) 。

如需（重）映射以`<leader>`开头的键位，请使用 [Whichkey映射](#whichkey-bindings).
如果键位映射是LSP（智能）相关的，请使用 [LSP映射](#lsp-bindings).
其他所有情况，请使用 [NeoVim映射](#neovim-mappings)

## Leader 键

默认的Leader键是 `Space`。 可以通过如下配置更改：

```lua
lvim.leader = "space"
```

## 查看键位映射

使用 `<Leader>sk` 来查看当前设置的键位映射。

如需了解某键位是否已经被使用了：

```lua
:verbose map <TAB>
```

- :nmap 普通模式
- :vmap 可视模式
- :imap 输入模式

或是列出所有映射：

```lua
:map
```

## NeoVim 映射

### 键位（重）映射

修改或添加键位映射：

```lua
  -- X closes a buffer
  lvim.keys.normal_mode["<S-x>"] = ":BufferKill<CR>"

  -- Centers cursor when moving 1/2 page down
  lvim.keys.normal_mode["<C-d>"] = "<C-d>zz"
```

### 删除默认键位映射

删除LunarVim默认的键位映射：

```lua
  lvim.keys.normal_mode["<C-h>"] = false
  lvim.keys.normal_mode["<C-j>"] = false
  lvim.keys.normal_mode["<C-k>"] = false
  lvim.keys.normal_mode["<C-l>"] = false
```

## LSP映射

如需修改LSP映射请使用 `lvim.lsp.buffer_mappings.[normal|visual|insert]_mode`。

### （重）映射

映射你自己的功能：

```lua
lvim.lsp.buffer_mappings.normal_mode['H'] = { vim.lsp.buf.hover, "Show documentation" }
```

或将默认的功能映射到不同的键位：

```lua
lvim.lsp.buffer_mappings.normal_mode['gk'] = lvim.lsp.buffer_mappings.normal_mode['K']
```

### 删除映射

LSP映射相比于常规映射有更高的优先级。
因此为了将某个键位用于常规映射，必须首先删除它

```lua
lvim.lsp.buffer_mappings.normal_mode['K'] = nil
lvim.keys.normal_mode['K'] = "<Cmd>echo Okay!<CR>"
```

## Whichkey映射

如需修改whichkey映射请使用 `lvim.builtin.which_key.mappings`。
leader键已经被包含了。

### 单一映射

映射一个单一键位：

```lua
lvim.builtin.which_key.mappings["P"] = {
  "<cmd>lua require'telescope'.extensions.project.project{}<CR>", "Projects"
}
```

上面的配置包括了leader键。因此，对于上面的示例，键位映射变为`<leader>P`

### 删除单一键位映射

删除一个Whichkey映射：

```lua
lvim.builtin.which_key.mappings['w'] = {}
```

添加一个键到已经已存在的目录/子目录：

```lua
lvim.builtin.which_key.mappings["tP"] = {
  "<cmd>lua require'telescope'.extensions.project.project{}<CR>", "Projects"
}
```

### 子目录映射

映射一组键位。按`<Leader>td`会触发`Definitions`。该目录的目录名会显示为`Trouble`：

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

### 替换所有的whichkey映射

清除所有的whichkey映射并替换为自己的，使用如下形式：

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

## [toggleterm](https://github.com/akinsho/toggleterm.nvim) (终端) 映射

更改终端映射：

```lua
lvim.builtin.terminal.open_mapping = "<c-t>"
```
