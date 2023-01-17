---
sidebar_position: 1
---

# 安装

## 前置条件

- 请确保拥有最新版本的 [`Neovim v0.8.0+`](https://github.com/neovim/neovim/releases/latest).
- 安装 [`git`](https://cli.github.com/), [`make`](https://www.gnu.org/software/make/), [`pip`](https://pypi.org/project/pip/), [`python`](https://www.python.org/) [`npm`](https://npmjs.com/), [`node`](https://nodejs.org/) and [`cargo`](https://www.rust-lang.org/tools/install) installed on your system.
- [解决全局安装程序包时的EACES权限错误](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)，以避免使用npm安装程序包时出错。 
- [`PowerShell 7+`](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.2) (Windows系统所需)。

## 稳定版

(Neovim 0.8.0)

没有意料之外的错误:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOs">

```bash
LV_BRANCH='release-1.2/neovim-0.8' bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/fc6873809934917b470bff1b072171879899a36b/utils/installer/install.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
pwsh -c "`$LV_BRANCH='release-1.2/neovim-0.8'; iwr https://raw.githubusercontent.com/LunarVim/LunarVim/fc6873809934917b470bff1b072171879899a36b/utils/installer/install.ps1 -UseBasicParsing | iex"
```

</TabItem>
</Tabs>

## 开发版

(Neovim 0.9.0)

拥有全部新功能和新bug:

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOs">

```bash
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
pwsh -c "iwr https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.ps1 -UseBasicParsing | iex"
```

</TabItem>
</Tabs>

如遇任何问题，请参考[troubleshooting](../troubleshooting/README.md)部分。

<iframe width="560" height="315" src="https://www.youtube.com/embed/sFA9kX-Ud_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## 更新LunarVim

- 进入到LunarVim `:LvimUpdate`
- 从命令行 `lvim +LvimUpdate +q`

### 更新插件

- 进入到LunarVim `:LvimSyncCorePlugins`

## 卸载

您可以使用附带的 `uninstall` 脚本卸载LunarVim（包括配置文件）。

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOs">

```bash
bash ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh
```

#### **或**

```bash
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/uninstall.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
Invoke-WebRequest https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/uninstall.ps1 -UseBasicParsing | Invoke-Expression
```

</TabItem>
</Tabs>
