---
sidebar: auto
sidebar_position: 4
---

# FAQ

## How do I [..] ?

### How do I use LunarVim in Neovide?

Use this bash script to start neovide

```bash
#!/usr/bin/env bash

export LUNARVIM_RUNTIME_DIR="${LUNARVIM_RUNTIME_DIR:-"$HOME/.local/share/lunarvim"}"
export LUNARVIM_CONFIG_DIR="${LUNARVIM_CONFIG_DIR:-"$HOME/.config/lvim"}"
export LUNARVIM_CACHE_DIR="${LUNARVIM_CACHE_DIR:-"$HOME/.cache/lvim"}"
export LUNARVIM_BASE_DIR="${LUNARVIM_BASE_DIR:-"$HOME/.local/share/lunarvim/lvim"}"

exec neovide -- -u "$LUNARVIM_BASE_DIR/init.lua" "$@"
```

## What is `null-ls` and why do you use it?

For C/C++ we have the `clangd` by `llvm` which can also use its siblings' abilities `clang-tidy` and `clang-format` to support additional linting and formatting. But something like `pyright` doesn't support formatting, so we use `null-ls` to register `black` and `flake8` for example, as a "fake" language server.

Since it's not using a separate binary it's called `null-ls` or _null language server_.

## Where can I find some example configs?

If you want ideas for configuring LunarVim you can look at these repositories.

- starter.lvim [https://github.com/LunarVim/starter.lvim](https://github.com/LunarVim/starter.lvim) (a collection of language specific lunarvim configurations)
- Chris - [https://github.com/ChristianChiarulli/lvim](https://github.com/ChristianChiarulli/lvim)
- Abouzar - [https://github.com/abzcoding/lvim](https://github.com/abzcoding/lvim)
- Nelson - [https://github.com/rebuilt/lvim](https://github.com/rebuilt/lvim)
