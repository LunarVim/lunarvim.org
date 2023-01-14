# Plugins

Plugins are managed by [folke/lazy.nvim](https://github.com/folke/lazy.nvim), and are split into [core-plugins](./core-plugins-list.md) and [user-plugins](#user-plugins).

:::tip

use `:Lazy` to see a list of all installed plugins!

:::

## Core plugins

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

### Pinning

Versions of core plugins are pinned for better stability,
you can disable pinning by setting an environment variable `$LVIM_DEV_MODE`, e.g. can be defined in `~/.local/bin/lvim`

## User plugins

User plugins can be installed by adding entries to the `lvim.plugins` table in your `config.lua` file,
and saving or manually invoking `LvimReload` will trigger lazy to sync all the plugins in that table.

```lua
lvim.plugins = {
  { "lunarvim/colorschemes" },
  {
    "nvim-neorg/neorg",
    ft = "norg", -- lazy-load on filetype
    config = true, -- run require("neorg").setup()
  },
}
```

:::tip

You can find all available options [here](https://github.com/folke/lazy.nvim#-plugin-spec) or in lunarvim: `:help lazy.nvim-plugin-spec`
You can find more examples [here](https://github.com/folke/lazy.nvim#examples)

:::

Check the [extra plugins](./extra-plugins.md) for some suggestions.

_Note: removing a plugin from the `lvim.plugin` table removes it from your configuration but not your system. To remove them completely, run `:Lazy clean`._
