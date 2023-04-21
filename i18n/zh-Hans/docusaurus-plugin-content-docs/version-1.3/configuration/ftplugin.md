---
sidebar_position: 7
---

# FTPlugin (文件类型插件)

## 简介

From `:h ftplugin`

> 文件类型插件和全局插件一样，只是它仅为当前缓冲区设置可选项、定义键位映射。

以下示例只为`C`语言文件类型设置 `shiftwidth` 和 `tabstop`：

```lua
-- create a file at $LUNARVIM_CONFIG_DIR/after/ftplugin/c.lua
vim.cmd("setlocal tabstop=4 shiftwidth=4")
```
