# 安装

## 常规

1. 确保检查你有一个支持`luajit`的最新Neovim版本。版本信息`nvim -v`的输出应该包括一行：`LuaJIT`。
2. 确保[手动安装](#manual-install)中列出的所有依赖都被安装在你的系统上。

## 无法执行 `lvim`

确保`lvim`在环境变量中是可用、可执行的。你可以检查这些命令的结果来验证：

```shell
which lvim
stat "$(which lvim)"
cat "$(which lvim)"
```

如果你在使用上述任何命令时出错，那么需要手动修复，或者重新安装二进制文件。

```shell
cd <lunarvim-repo> # this will be in `~/.local/share/lunarvim/lvim` by default
bash utils/installer/install_bin.sh
```

## 更新后出现错误

### 缓存问题

这可能是旧的缓存文件需要重置导致的。LunarVim使用[impatient's](https://github.com/lewis6991/impatient.nvim)来优化启动过程，提供快速的体验。

1. 在LunarVim中: `:LvimCacheReset`
2. 从终端: `lvim +LvimCacheReset`

### 插件问题

这可能是由于多种原因造成的，但最常见的是一些插件的破坏性的改变，或`git`拒绝拉动一个插件的更新，因为它
[不能安全地fast-forward当前分支]（https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a）。

解决这个问题的最简单方法是手动更新（可能需要重新设置）出问题的插件，它应该位于Lazy的package-root中，即`$LUNARVIM_RUNTIME_DIR/site/pack/lazy`。


拿`nvim-cmp`插件来举例：

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" status
```

检查当前处于哪个commit：

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" log -1
```

它应该与`$LUNARVIM_RUNTIME_DIR/lvim/snapshots/default.json`中的匹配，但你可以随时用`:LvimSyncCorePlugins`恢复snapshot。

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" pull --rebase
```

### Lazy.nvim 出错

如果你没有对任何插件做任何改动，那么你可以完全删除Lazy的package root。

```shell
LUNARVIM_RUNTIME_DIR="${LUNARVIM_RUNTIME_DIR:-$HOME/.local/share/lunarvim}"
rm -rf "$LUNARVIM_RUNTIME_DIR/site/pack/lazy"
```

现在打开`lvim`，插件应该开始安装，否则运行`:Lazy sync`。

## LunarVim 很慢!

### 是否在使用 `fish`?

> 首先，不建议在vim中把shell设置为fish。大量的vim插件执行与fish不兼容的shell脚本，所以将其设置为`/bin/sh`通常更好，尤其是当你没有很好的理由将其设置为fish时。

```lua
vim.opt.shell = "/bin/sh"
```

参考 [fish-shell/fish-shell#7004](https://github.com/fish-shell/fish-shell/issues/7004) 与 `:h 'shell'` 以了解更多信息。

## 语言服务器XXX没有被启动!

### 更新node

一些语言服务器依赖于较新版本的node，将node版本更新到最新。

### 它被覆盖了?

这可能是由于语言服务器被[覆盖](../configuration/language-features/language-servers.md#server-override)了

```lua
--- is it in this list?
:lua print(vim.inspect(lvim.lsp.automatic_configuration.skipped_servers))
```

如果是这样，那么需要从该列表中删除它，然后重新运行`:LvimCacheReset`

```lua
vim.tbl_map(function(server)
  return server ~= "emmet_ls"
end, lvim.lsp.automatic_configuration.skipped_servers)
```

或者[手动设置](../configuration/language-features/language-servers.md#server-setup)。

### 是否被[nvim-lsp-installer](https://github.com/williamboman/nvim-lsp-installer)支持?

任何没有在`LspInstallInfo`中显示的语言服务器都需要手动安装。

### 是否在`:LspInfo`显示的列表中?

请参考[调试nvim-lspconfig](https://github.com/neovim/nvim-lspconfig#debugging)的提示。

## 多个语言服务器同时启动!

这些语言服务器被默认地[覆盖](../configuration/language-features/language-servers.md#server-override)了吗?

```lua
:lua print(vim.inspect(require("lvim.lsp.config").override))
```

如果是，那么你使用的是[LunarVim#1813](https://github.com/LunarVim/LunarVim/pull/1813)之前的语法。

```lua
-- this is the correct syntax since 3dd60bd
vim.list_extend(lvim.lsp.override, { "jsonls" })
```

```lua
-- this the correct syntax since 198577a
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "jsonls" })
```

## 我的LunarVim很丑!

- 请确保你有一个支持24位色彩的终端。如果没有，可能会面临一些关于默认配色和其他配色的问题。

  - 关于什么是24位色彩以及测试你的终端是否支持它，我们喜欢这个有用的库：https://github.com/termstandard/colors

- 另一个问题可能是`termguicolors`。如果是这种情况，我们建议看一下neovim的官方文档。

  - 什么是 `termguicolors`? 参考 <https://neovim.io/doc/user/options.html#'termguicolors'>

- 另一种情况可能是你的`$TERM`变量改变了终端的颜色。

  - 这种情况，我们建议你看看是否有其他人和你有相同的`$TERM`变量，以及他们是怎么解决的https://github.com/neovim/neovim/issues?q=label%3Atui+color
