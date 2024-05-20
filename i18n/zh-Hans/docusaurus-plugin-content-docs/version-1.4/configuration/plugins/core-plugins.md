---
sidebar_position: 1
---

# 核心插件
核心插件的配置可通过 `lvim.builtin` 表访问。

## 禁用核心插件
大多数应该包含一个 `active` 属性，可以将其设置为 `false` 以禁用插件

```lua
lvim.builtin.alpha.active = true
lvim.builtin.dap.active = true 
```

:::caution

禁用插件只有重新启动 lvim 才会生效。

:::

## 配置核心插件

要配置内置插件，请编辑 `lvim.builtin.<builtin>` 中的选项。您可以按 `<TAB>` 获取自动完成建议以探索这些设置。

```lua
lvim.builtin.cmp.completion.keyword_length = 2
lvim.builtin.telescope.defaults.layout_config.width = 0.95
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 75
```

:::tip
插件的 README（以及 `docs/` 文件夹，如果存在）通常包含优秀的文档，因此如果您经常使用它们，创建别名可能是值得的。

:::

## Pinning

核心插件的版本被固定以获得更好的稳定性，您可以通过设置环境变量 `$LVIM_DEV_MODE` 来禁用固定，例如可以在 `~/.local/bin/lvim` 中定义
