---
sidebar: auto
sidebar_position: 4
---

# ЧаПИ

## Як зробити [..] ?

### Як використовувати LunarVim у Neovide?

Використовуйте цей bash-скрипт для запуску neovide

```bash
#!/usr/bin/env bash

export LUNARVIM_RUNTIME_DIR="${LUNARVIM_RUNTIME_DIR:-"$HOME/.local/share/lunarvim"}"
export LUNARVIM_CONFIG_DIR="${LUNARVIM_CONFIG_DIR:-"$HOME/.config/lvim"}"
export LUNARVIM_CACHE_DIR="${LUNARVIM_CACHE_DIR:-"$HOME/.cache/lvim"}"
export LUNARVIM_BASE_DIR="${LUNARVIM_BASE_DIR:-"$HOME/.local/share/lunarvim/lvim"}"

exec neovide -- -u "$LUNARVIM_BASE_DIR/init.lua" "$@"
```

## Що таке `null-ls` та чому ви його використовуєте?

Для C/C++ ми маємо `clangd` з `llvm`, який також може використовувати можливості своїх братів `clang-tidy` і `clang-format` для підтримки додаткового лінтування і форматування. Але щось на кшталт `pyright` не підтримує форматування, тому ми використовуємо `null-ls` для реєстрації `black` і `flake8`, наприклад, як "фальшивого" мовного сервера.

оскільки він не використовує окремий бінарний файл, він називається `null-ls` або _нульовий мовний сервер_.


## Де я можу знайти приклади конфігурацій?

Якщо маєте ідеї для налаштування LunarVim, то перегляньте ці репозиторії.

- starter.lvim [https://github.com/LunarVim/starter.lvim](https://github.com/LunarVim/starter.lvim) (збірка мовних конфігурацій lunarvim)
- Chris - [https://github.com/ChristianChiarulli/lvim](https://github.com/ChristianChiarulli/lvim)
- Abouzar - [https://github.com/abzcoding/lvim](https://github.com/abzcoding/lvim)
- Nelson - [https://github.com/rebuilt/lvim](https://github.com/rebuilt/lvim)
