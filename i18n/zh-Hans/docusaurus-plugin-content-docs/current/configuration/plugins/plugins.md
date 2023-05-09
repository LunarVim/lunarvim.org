
# 插件

插件由[folke/lazy.nvim](https://github.com/folke/lazy.nvim)管理。

:::tip

用 `:Lazy` 查看所有已经安装的插件的列表。

:::

# 安装插件

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

:::tip

您可以在[此处](https://github.com/folke/lazy.nvim#-plugin-spec)或 lunarvim：`:help lazy.nvim-plugin-spec `中找到所有可用选项。
您可以在[此处](https://github.com/folke/lazy.nvim#examples)找到更多示例。

:::

:::info

在 `lvim.plugins` 表中移除插件会将其从您的配置中删除，并不会在系统中移除。
想要完全的删除，请运行 `:Lazy clean`。

:::

## 核心插件

核心插件的配置可通过该`lvim.builtin`表访问。

### 禁用核心插件

大多数插件应该包含一个可以被设置为`false`禁用插件的属性`active`

```
lvim.builtin.alpha.active = false
lvim.builtin.dap.active = false
```

:::caution

直到您重启lvim，否则禁用插件不会生效。

:::

### 配置核心

要配置内置插件，请编辑`lvim.builtin.<builtin>`。
您可以按`<TAB>`获取自动完成建议以浏览这些设置。

```lua
lvim.builtin.cmp.completion.keyword_length = 2
lvim.builtin.telescope.defaults.layout_config.width = 0.95
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 75
```

:::tip

插件的README（和可能存在的`docs/`文件夹 ）通常包括优秀的文档，所以如果您经常使用它们，创建一个别名可能是值得的

:::

### 版本固定

核心插件的版本通常被固定，以获得更好的稳定性，
你可以通过设置环境变量 `$LVIM_DEV_MODE` 来解除版本固定。