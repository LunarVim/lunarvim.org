---
sidebar_position: 1
---

# 核心插件

_This page is not complete, [you can help us write it](https://github.com/LunarVim/lunarvim.org/issues/352)_

The configurations for core plugins are accessible through `lvim.builtin`. Most should contain an `active` attribute that can be set to `false` to disable the plugin

```lua
lvim.builtin.alpha.active = true
lvim.builtin.dap.active = true -- (default: false)
lvim.builtin.terminal.active = true
```

:::caution

Disabling a plugin will not take effect until you restart lvim.

:::

You can press `<TAB>` to get autocomplete suggestions to explore these settings.

```lua
lvim.builtin.cmp.completion.keyword_length = 2
lvim.builtin.telescope.defaults.layout_config.width = 0.95
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 75
```

:::tip

A plugin's README (and `docs/` folder if it exists) typically contain excellent documentation, so it may be worthwhile to create an alias for if you use them often.

:::

## Pinning

Versions of core plugins are pinned for better stability,
you can disable pinning by setting an environment variable `$LVIM_DEV_MODE`, e.g. can be defined in `~/.local/bin/lvim`
