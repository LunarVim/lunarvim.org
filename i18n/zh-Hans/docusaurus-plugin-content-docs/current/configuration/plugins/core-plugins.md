---
sidebar_position: 1
---

# 核心插件

核心插件的配置可通过该`lvim.builtin`表访问。

## 禁用核心插件

大多数插件应该包含一个可以被设置为`false`禁用插件的属性`active`

```
lvim.builtin.alpha.active = false
lvim.builtin.dap.active = false
```

:::caution

直到您重启lvim，否则禁用插件不会生效。

:::

## 配置核心

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

## 版本固定

核心插件的版本通常被固定，以获得更好的稳定性，
你可以通过设置环境变量 `$LVIM_DEV_MODE` 来解除版本固定。
