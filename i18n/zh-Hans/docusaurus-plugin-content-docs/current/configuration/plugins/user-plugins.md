---
sidebar_position: 2
---

# 用户插件 

用户插件可以通过你的 `config.lua` 文件，在 `lvim.plugins` 表中添加项目来进行安装。
保存或手动调用 `LvimReload` 将触发 lazy.nvim 来同步该表中的所有插件。

例子:

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

检查[示例配置](./example-configurations.md)以获取一些建议。

:::tip

您可以在[此处](https://github.com/folke/lazy.nvim#-plugin-spec)或 lunarvim：`:help lazy.nvim-plugin-spec `中找到所有可用选项。
您可以在[此处](https://github.com/folke/lazy.nvim#examples)找到更多示例。

:::

:::info

在 `lvim.plugins` 表中移除插件会将其从您的配置中删除，并不会在系统中移除。
想要完全的删除，请运行 `:Lazy clean`。

:::
