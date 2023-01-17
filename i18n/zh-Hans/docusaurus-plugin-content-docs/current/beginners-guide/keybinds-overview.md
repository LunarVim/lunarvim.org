---
sidebar_position: 3
---

# 键位总览

这里概述了最常用的键位映射。以下键位表并不完整，可以通过 `<leader>sk` 搜索全部键位，或按下 `<leader>` 显示键位提示弹窗。

也可以参考:
[vim键位](https://devhints.io/vim)

**提示:** `<leader>` 默认是空格键，全部按键请参考 `:help keycodes`。

**提示:** `<M>` 表示Windows/Linux系统上的 `alt`，MacOS系统上的 `option` 。

**提示:** 要查看不以`<leader>`键开头的键位（例如下面出现的 `<C-\>`等），先按`<leader>`弹出键位提示弹窗，再按`<backspace>`键查看。

## 插件

| 按键                           | 描述                                                                                     | 模式   |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | ------ |
| `<leader>`                    | [whichkey](https://github.com/folke/which-key.nvim) (键位提示弹窗 (1秒后弹出))        | normal |
| `<leader>e`                   | [nvimtree](https://github.com/nvim-tree/nvim-tree.lua) (文件浏览边栏)                     | normal |
| `<leader>f` `<leader>s`(menu) | [telescope](https://github.com/nvim-telescope/telescope.nvim) (查找文件，搜索文本等) | normal |
| `<leader>;`                   | [alpha](https://github.com/goolord/alpha-nvim) (主页)                                      | normal |
| `<C-\>` `<M-1/2/3>`           | [toggleterm](https://github.com/akinsho/toggleterm.nvim) (终端)                             | normal |

## LSP

| 按键  | 描述           | 模式   |
| ---- | --------------------- | ------ |
| `K`  | 悬停信息    | normal |
| `gd` | 跳转到定义      | normal |
| `gD` | 跳转到声明     | normal |
| `gr` | 跳转到引用      | normal |
| `gI` | 跳转到实现   | normal |
| `gs` | 显示签名帮助   | normal |
| `gl` | 显示当前行诊断信息 | normal |

## 编辑

| 按键         | 描述       | 模式           |
| ----------- | ----------------- | -------------- |
| `<leader>/` | 注释           | normal, visual |
| `gb`        | 块注释     | visual         |
| `<M-k>`     | 向上移动行   | normal, visual |
| `<M-j>`     | 向下移动行 | normal, visual |

## Completion

| 按键                        | 描述                            | 模式   |
| -------------------------- | -------------------------------------- | ------ |
| `<C-space>`                | 显示补全窗口                   | insert |
| `<CR>` `<C-y>`             | 确认                                | insert |
| `<C-e>`                    | 种植                                  | insert |
| `<C-k>` `<Up>` `<Tab>`     | 上一项                  | insert |
| `<C-j>` `<Down>` `<S-Tab>` | 下一项                       | insert |
| `<C-d>`                    | 向上滚动文本                         | insert |
| `<C-f>`                    | 向下滚动文本                       | insert |
| `<CR>` `<Tab>`             | 跳转到代码模版的下一个位置     | insert |
| `<S-Tab>`                  | 跳转到代码模版的上一个位置 | insert |

## Windows

| 按键         | 描述            | 模式   |
| ----------- | ---------------------- | ------ |
| `<C-h>`     | 光标移到左窗口      | normal |
| `<C-j>`     | 光标移到下窗口     | normal |
| `<C-k>`     | 光标移到上窗口     | normal |
| `<C-l>`     | 光标移到右窗口     | normal |
| `<C-Up>`    | 减小窗口高度 | normal |
| `<C-Down>`  | 增加窗口高度 | normal |
| `<C-Left>`  | 减小窗口宽度 | normal |
| `<C-Right>` | 增大窗口宽度  | normal |

## Miscellaneous

| 按键          | 描述               | 模式   |
| ------------ | ------------------------- | ------ |
| `<leader>Lc` | 编辑lvim配置文件           | normal |
| `<leader>h`  | 清除搜索结果高亮 | normal |
| `<leader>sh` | 搜索`:help`帮助文件    | normal |
| `<leader>sr` | 搜索最近打开的文件         | normal |
| `<leader>pS` | 显示已安装的插件 | normal |

## [nvimtree](https://github.com/nvim-tree/nvim-tree.lua) (文件浏览边栏)

`g?` 显示键位。
