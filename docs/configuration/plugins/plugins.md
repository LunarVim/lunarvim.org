# Plugins

Plugins are managed by [folke/lazy.nvim](https://github.com/folke/lazy.nvim).

:::tip

use `:Lazy` to see a list of all installed plugins!

:::

# Installing plugins

User plugins can be installed by adding entries to the `lvim.plugins` table in
your `config.lua` file, saving or manually invoking `LvimReload` will trigger
lazy to sync all the plugins in that table.

Example:

```lua
lvim.plugins = {
  { "lunarvim/colorschemes" },
  {
    "stevearc/dressing.nvim",
    config = function()
      require("dressing").setup({
        input = { enabled = false },
      })
    end,
  },
  {
    "nvim-neorg/neorg",
    ft = "norg", -- lazy-load on filetype
    config = true, -- run require("neorg").setup()
  },
}
```

:::tip

You can find all available options [here](https://github.com/folke/lazy.nvim#-plugin-spec)
or in lunarvim: `:help lazy.nvim-plugin-spec`
You can find more examples [here](https://github.com/folke/lazy.nvim#examples)

:::

:::info

Removing a plugin from the `lvim.plugins` table removes it from your configuration but not your system. To remove them completely, run `:Lazy clean`

:::

## Core plugins

The configurations for core plugins are accessible through the `lvim.builtin` table.

### Disabling core plugins

Most should contain an `active` attribute that can be set to `false` to disable
the plugin

```lua
lvim.builtin.alpha.active = false
lvim.builtin.dap.active = false
```

:::caution

Disabling a plugin will not take effect until you restart lvim.

:::

### Configuring core plugins

To configure a builtin plugin, edit options in `lvim.builtin.<builtin>`.
You can press `<TAB>` to get autocomplete suggestions to explore these settings.

```lua
lvim.builtin.cmp.completion.keyword_length = 2
lvim.builtin.telescope.defaults.layout_config.width = 0.95
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 75
```

:::tip

A plugin's README (and `docs/` folder if it exists) typically contain excellent documentation, so it may be worthwhile to create an alias if you use them often.

:::

### Pinning

Versions of core plugins are pinned for better stability,
you can disable pinning by setting an environment variable `$LVIM_DEV_MODE`, e.g. can be defined in `~/.local/bin/lvim` or in your shell's rc file:

```bash
export LVIM_DEV_MODE=1
# or 
alias lvim="LVIM_DEV_MODE=1 lvim"
```
