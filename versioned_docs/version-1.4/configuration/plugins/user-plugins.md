---
sidebar_position: 2
---

# User plugins

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

Check the [example configurations](./example-configurations.md) for some suggestions.

:::tip

You can find all available options [here](https://github.com/folke/lazy.nvim#-plugin-spec)
or in lunarvim: `:help lazy.nvim-plugin-spec`
You can find more examples [here](https://github.com/folke/lazy.nvim#examples)

:::

:::info

Removing a plugin from the `lvim.plugins` table removes it from your configuration but not your system. To remove them completely, run `:Lazy clean`

:::
