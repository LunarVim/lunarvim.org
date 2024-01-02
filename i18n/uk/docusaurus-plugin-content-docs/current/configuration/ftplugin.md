---
sidebar_position: 7
---

# FTP-плагін (плагін типу файлу)

## Опис

З `:h ftplugin`

> Плагін типу файлу схожий на глобальний плагін, за винятком того, що він встановлює параметри та
> визначає відображення лише для поточного буфера.

Приклад встановлення певних `shiftwidth` і `tabstop`, які застосовуються лише для типів файлів `C`.

```lua
-- create a file at $LUNARVIM_CONFIG_DIR/after/ftplugin/c.lua
vim.cmd("setlocal tabstop=4 shiftwidth=4")
```
