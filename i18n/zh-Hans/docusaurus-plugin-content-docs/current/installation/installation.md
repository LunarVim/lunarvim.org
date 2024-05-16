---
sidebar_position: 1
---

# 安装

## 前置条件

- 请确保拥有最新版本的 [`Neovim v0.9.5+`](https://github.com/neovim/neovim/releases/latest)。
- 在您的系统上安装 [`git`](https://cli.github.com/)、[`make`](https://www.gnu.org/software/make/)、[`pip`](https://pypi.org/project/pip/)、[`python`](https://www.python.org/)、[`npm`](https://npmjs.com/)、[`node`](https://nodejs.org/) 和 [`cargo`](https://www.rust-lang.org/tools/install)。
- [解决全局安装程序包时的 `EACCES` 权限错误](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally)，以避免使用 npm 安装程序包时出错。
- [`PowerShell 7+`](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.2)（Windows系统所需）。

## 可选功能

- 安装 [`lazygit`](https://github.com/jesseduffield/lazygit#installation)。使得按下 `<leader>gg` 能够在 `lvim` 中启动 `lazygit`，以获得集成和增强的 Git 体验。

## 稳定版

(Neovim 0.9.5)

没有警报和意外：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOS">

```bash
LV_BRANCH='master' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
pwsh -c "`$LV_BRANCH='master'; iwr https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.ps1 -UseBasicParsing | iex"
```

</TabItem>
<TabItem value="docker" label="用Docker尝试">

_这只是为了查看基本的功能，因此某些交互可能会被环境拦截。_

```bash
docker run -w /tmp -it --rm alpine:edge sh -uelic 'addgroup -S lunaruser && adduser -S lunaruser -G lunaruser --shell /bin/sh && apk add yarn git python3 cargo neovim ripgrep alpine-sdk bash curl --update && LV_BRANCH='master' su -c "bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh) --no-install-dependencies" lunaruser && su -c /home/lunaruser/.local/bin/lvim lunaruser'
```

</TabItem>
</Tabs>

## 开发版

(Neovim 0.10.0)

所有的新功能与新问题：

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOS">

```bash
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
pwsh -c "iwr https://raw.githubusercontent.com/LunarVim/LunarVim/master/utils/installer/install.ps1 -UseBasicParsing | iex"
```

</TabItem>
<TabItem value="docker" label="用 Docker 尝试">

_这只是为了查看基本的功能，所以部分互动可能会被环境拦截。_

```bash
docker run -w /root -it --rm alpine:edge sh -uelic 'apk add git neovim ripgrep alpine-sdk bash curl --update && bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh) --no-install-dependencies && /root/.local/bin/lvim'
```

</TabItem>
</Tabs>

如遇任何问题，请参考[故障排除](../troubleshooting/README.md)部分。

<iframe width="560" height="315" src="https://www.youtube.com/embed/sFA9kX-Ud_c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## 更新LunarVim


- 将 LunarVim 更新到当前 LunarVim 分支的最新提交。 
- 在命令行模式中使用 `:LvimUpdate` 命令。
- 按下 `<leader>Lu` 使用 WhichKey。
- 从命令行 `lvim +LvimUpdate +q`

### 升级插件

- 进入 LunarVim 内部 `:LvimSyncCorePlugins`

## 卸载

您可以使用附带的 `uninstall` 脚本卸载 LunarVim（包括配置文件）。

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOS">

```bash
bash ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh
```

**或者**

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
