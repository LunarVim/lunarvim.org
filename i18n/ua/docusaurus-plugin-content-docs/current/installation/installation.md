---
sidebar_position: 1
---

# Установлення

## Передумови 

- Упевніться, що ви встановили останюю версію [`Neovim v0.9.0+`](https://github.com/neovim/neovim/releases/latest).
- [`git`](https://cli.github.com/), [`make`](https://www.gnu.org/software/make/), [`pip`](https://pypi.org/project/pip/), [`python`](https://www.python.org/), [`npm`](https://npmjs.com/), [`node`](https://nodejs.org/) та [`cargo`](https://www.rust-lang.org/tools/install) мають бути встановлені на вашій системі.
- [Вирішення проблеми з дозволами `EACCES` під час глобального встановлення пакунків](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) щоб уникнути помилок під час встановлення пакетів за допомогою npm.
- [`PowerShell 7+`](https://learn.microsoft.com/en-us/powershell/scripting/whats-new/migrating-from-windows-powershell-51-to-powershell-7?view=powershell-7.2) (для Windows).

## Передумови для додаткових функцій 
- Установіть [`lazygit`](https://github.com/jesseduffield/lazygit#installation). Це дозволяє `<leader>gg` запускати `lazygit` для інтегрованого та розширеного використання Git'а, перебуваючи у `lvim`.


## Release (стабільна збірка)

(Neovim 0.9.0)

Без тривог і сюрпризів:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOS">

```bash
LV_BRANCH='release-1.3/neovim-0.9' bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.sh)
```

</TabItem>
<TabItem value="windows" label="Windows">

```powershell
pwsh -c "`$LV_BRANCH='release-1.3/neovim-0.9'; iwr https://raw.githubusercontent.com/LunarVim/LunarVim/release-1.3/neovim-0.9/utils/installer/install.ps1 -UseBasicParsing | iex"
```

</TabItem>
<TabItem value="docker" label="Спробуйте спочатку в Docker!">

_Це призначено лише для ознайомлення з базовим функціоналом, тому деякі операції можуть бути заблоковані середовищем._

```bash
docker run -w /tmp -it --rm alpine:edge sh -uelic 'addgroup -S lunaruser && adduser -S lunaruser -G lunaruser --shell /bin/sh && apk add yarn git python3 cargo neovim ripgrep alpine-sdk bash --update && LV_BRANCH='release-1.3/neovim-0.9' su -c "bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/release-1.3/neovim-0.9/utils/installer/install.sh) --no-install-dependencies" lunaruser && su -c /home/lunaruser/.local/bin/lvim lunaruser'
```

</TabItem>
</Tabs>

## Nightly (нічна збірка)

(Neovim 0.10.0)

Усі нові можливості зі всіма новими помилками:

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
<TabItem value="docker" label="Спробуйте спочатку в Docker!">

_Це призначено лише для ознайомлення з базовим функціоналом, тому деякі операції можуть бути заблоковані середовищем._

```bash
docker run -w /root -it --rm alpine:edge sh -uelic 'apk add git neovim ripgrep alpine-sdk bash --update && bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh) --no-install-dependencies && /root/.local/bin/lvim'
```

</TabItem>
</Tabs>

Не забудьте перевірити секцію з [вирішення проблем](../troubleshooting/README.md), якщо ви зішхтовнетеся з проблемою.

<iframe width="560" height="315" src="https://www.youtube.com/embed/sFA9kX-Ud_c" title="Програвач відео YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## Оновлення LunarVim

- LunarVim оновлюється до поточного останнього коміта гілки LunarVim.  
- `:LvimUpdate` команда в режимі командного рядка.
- `<leader>Lu` використовуючи WhichKey.  
- З командного рядка `lvim +LvimUpdate +q`

### Оновлення плагінів

- Усередині LunarVim `:LvimSyncCorePlugins`

## Видалення 

Ви можете видалити LunarVim (включаючи файли налаштувань) використовуючи вбудований `uninstall` скрипт

<Tabs>
<TabItem value="linux/macos" label="Linux/MacOS">

```bash
bash ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh
```

**або**

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
