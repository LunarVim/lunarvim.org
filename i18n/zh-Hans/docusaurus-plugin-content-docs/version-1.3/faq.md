---
sidebar: auto
sidebar_position: 4
---

# FAQ

## 该如何 [..] ?

### 该如何添加自己的键位映射?

- 使用`<leader>Lk`查看所有默认的键位映射
- 更改leader键：

```lua
lvim.leader = "space"
```

- 添加自己的映射

```lua
-- save the buffer
lvim.keys.normal_mode["<C-s>"] = ":w<cr>"
-- move the cursor without leaving insert mode
lvim.keys.insert_mode["<A-h>"] = "<Left>"
lvim.keys.insert_mode["<A-l>"] = "<Right>"
```

- 删除或重映射默认的键位：

```lua
-- disable completely
lvim.keys.normal_mode["<C-Up>"] = ""
-- define a new behavior
lvim.keys.normal_mode["<C-q>"] = ":q<cr>"
```

- 你也可以通过[nvim_set_keymap](<https://neovim.io/doc/user/api.html#nvim_set_keymap()>)直接使用NeoVim API。

```lua
vim.api.nvim_set_keymap("i", "<C-p>", "<cmd>Telescope find_files<cr>", { noremap = true, silent = true, expr = true })
```

- 或者你可以使用原生的vim方式来处理那些你还不确定如何映射键位

```lua
-- Search and replace word under cursor using <F2>
vim.cmd [[ nnoremap <F2> :%s/<c-r><c-w>/<c-r><c-w>/gc<c-f>$F/i ]]
```

## 什么是 `null-ls` 以为为何使用它?

C/C++语言有`llvm`项目的`clangd`，它可以使用其附加的`clang-tidy`和`clang-format`来支持额外的提示和格式化。但是像`pyright`这样的工具不支持格式化，所以我们使用`null-ls`来注册如`black`和`flake8`之类的工具，作为一个"假的"语言服务器。

由于它没有使用单独的二进制文件，因此被称为`null-ls`或"空语言服务器"。

## 我在哪儿能找到示例配置?

如果你想有配置LunarVim的灵感，可以参考这些仓库：

- Chris - [https://github.com/ChristianChiarulli/lvim](https://github.com/ChristianChiarulli/lvim)
- Abouzar -[ https://github.com/abzcoding/lvim ](https://github.com/abzcoding/lvim)
- Nelson -[ https://github.com/rebuilt/lvim ](https://github.com/rebuilt/lvim)
