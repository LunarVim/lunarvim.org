---
sidebar_position: 2
---

# 用户插件

可以通过将条目添加到 `config.lua` 文件中的 `lvim.plugins` 表来安装用户插件，保存或手动调用 `LvimReload` 将触发延迟同步该文件中的所有插件。

例子：
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
检查[示例配置](/configuration/plugins/example-configurations.md)以获取一些建议。

:::tip

从 `lvim.plugins` 表中删除插件会将其从您的配置中删除，但不会从您的系统中删除。要完全删除它们，请运行 `:Lazy clean`

:::

