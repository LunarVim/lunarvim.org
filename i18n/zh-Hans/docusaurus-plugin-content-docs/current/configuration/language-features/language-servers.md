---
sidebar_position: 1
---

# 语言服务器

LunarVim使用[文件类型插件](/configuration/ftplugin.md)来实现语言服务器的懒加载设置。一个模板生成器被用来创建 `ftplugin` 文件，并将设置调用填充到这些文件中。

`lvim.lsp.automatic_configuration.skipped_servers` 包含一个默认不会被自动配置的服务器列表，例如，只允许JS-family语言使用 `tsserver`，当一种语言有多个可用的服务器时，那么通常会选择最受欢迎的那个。

:::info

如果要更改 `lvim.lsp.automatic_configuration.skipped_servers` 的值，**必须**在之后执行 `:LvimCacheReset` 命令才能生效。

:::

## 安装和更新服务

### 自动安装

默认情况下，一旦你打开支持的文件类型，大多数支持的语言服务器将被自动安装，例如，第一次打开一个Python文件将安装 `pyright` 并自动为你配置。

### 手动安装

```lua
lvim.lsp.automatic_servers_installation = false
```

请参考[mason](https://github.com/williamboman/mason.nvim)，查看当前可用服务器的最新完整列表。

要安装一个支持的语言服务器：

```vim
:LspInstall `<your_language_server>`
```

你也可以打开 `:Mason` ，交互式地选择要安装的服务器（按`g?`键绑定）。

### 更新服务器

打开 `:Mason`，选择一个服务器，用 `u` 来更新它。你可以用 `<S-u>` 来更新所有Mason软件包。

## 改变默认服务器

要使用与默认服务器不同的服务器，请将默认服务器添加到 `skipped_servers` 列表中，并删除你想使用的那个服务器。

:::info

对 `lvim.lsp.automatic_configuration.skipped_servers` 的任何修改都**必须**在按下 `:LvimCacheReset` 之后才会生效。

:::

例子:

- 使用j `jedi_language_server` 而不是 `pyright`

  ```lua
  -- add `pyright` to `skipped_servers` list
  vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "pyright" })
  -- remove `jedi_language_server` from `skipped_servers` list
  lvim.lsp.automatic_configuration.skipped_servers = vim.tbl_filter(function(server)
    return server ~= "jedi_language_server"
  end, lvim.lsp.automatic_configuration.skipped_servers)
  ```

## 覆盖设置

### 使用 :LspSettings

为你的语言服务器进行设置:

```vim
:LspSettings <TAB>
```

例子:

1. `:LspSettings sumneko_lua`

2. ```json
   {
     "Lua.hint.enable": false
   }
   ```

这将在 `/lsp-settings` 中创建一个文件，以实现持久的更改。
请参考 [nlsp-settings](https://github.com/tamago324/nlsp-settings.nvim/blob/main/schemas/README.md) 的文档，
了解支持的语言服务器的完整更新列表。

:::tip

安装 `jsonls` LSP服务器用于自动完成。

:::

### 通过覆盖进行设置

将你想手动配置的服务器添加到 `lvim.lsp.automatic_configuration.skipped_servers`。

```lua
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "sumneko_lua" })
```

:::info

对 `lvim.lsp.automatic_configuration.skipped_servers` 的任何修改都**必须**在按下 `:LvimCacheReset` 之后才会生效。

:::

现在你可以使用 `$LUNARVIM_CONFIG_DIR/ftplugin/<filetype>.lua` 中的内置的[lsp管理器](https://github.com/LunarVim/LunarVim/blob/master/lua/lvim/lsp/manager.lua)手动设置它。

例子:

```lua
-- $LUNARVIM_CONFIG_DIR/ftplugin/lua.lua
local opts = {
  settings = {
    Lua = { hint = { enable = false } },
  },
}
require("lvim.lsp.manager").setup("sumneko_lua", opts)
```
