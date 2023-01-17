---
sidebar_position: 2
---

# 用户插件

_This page is not complete, [you can help us write it](https://github.com/LunarVim/lunarvim.org/issues/352)_

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

Check the [extra plugins](./example-configurations.md) for some suggestions.

_Note: removing a plugin from the `lvim.plugins` table removes it from your configuration but not your system. To remove them completely, run `:Lazy clean`._
