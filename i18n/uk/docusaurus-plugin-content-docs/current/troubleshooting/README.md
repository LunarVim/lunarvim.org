# Установлення 

## General

1. Make sure to check that you have a recent Neovim version with `luajit` support. The output of version information `nvim -v` should include a line for: `LuaJIT`.
2. Make sure all the dependencies listed in [Manual Install](#manual-install) are actually installed on your system.

## Unable to run `lvim`

Make sure that `lvim` is available and executable on your path. You can check the results of these commands to verify that

```shell
which lvim
stat "$(which lvim)"
cat "$(which lvim)"
```

If you get errors with any of the above commands, then you need to either fix that manually or reinstall the binary again.

```shell
cd <lunarvim-repo> # this will be in `~/.local/share/lunarvim/lvim` by default
bash utils/installer/install_bin.sh
```

## Getting errors after an update

### Cache issues

This might be the result of old cache files that need to be reset. LunarVim makes use of [impatient's](https://github.com/lewis6991/impatient.nvim) to optimize the startup procedure and deliver a snappy experience.

1. while running LunarVim: `:LvimCacheReset`
2. from the CLI: `lvim +LvimCacheReset`

### Plugin issue

This could be due to multiple reasons, but most commonly it's a breaking change in some plugin,
or `git` refusing to pull an update to a plugin because it
[can't safely fast-forward the current branch](https://blog.sffc.xyz/post/185195398930/why-you-should-use-git-pull-ff-only-git-is-a).

The easiest way to solve this is to manually update (a rebase is likely required) the offending plugin,
which should be located in Lazy's package-root at `$LUNARVIM_RUNTIME_DIR/site/pack/lazy`.

Let's say it's `nvim-cmp` for example

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" status
```

now check which commit is currently checked out

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" log -1
```

it should match the one in `$LUNARVIM_RUNTIME_DIR/lvim/snapshots/default.json`, but you can always restore the snapshot with `:LvimSyncCorePlugins`

```vim
:! git -C "$LUNARVIM_RUNTIME_DIR/site/pack/lazy/opt/nvim-cmp" pull --rebase
```

### Помилка з Lazy.nvim 

Якщо ви не вносили жодних змін до жодного з плагінів, ви можете повністю видалити кореневий теку пакунка Lazy.

```shell
LUNARVIM_RUNTIME_DIR="${LUNARVIM_RUNTIME_DIR:-$HOME/.local/share/lunarvim}"
rm -rf "$LUNARVIM_RUNTIME_DIR/site/pack/lazy"
```

тепер відкрийте `lvim`, плагіни мають почати встановлюватися, в іншому випадку запустіть `:Lazy sync`.

## LunarVim повільний!

### ви використовуєте `fish`?

> По-перше, не рекомендується взагалі ставити fish як оболонку у Vim. Багато з Vim-плагінів виконують не сумісні з fish команди оболонки, тому ліпше встановити `/bin/sh` зазвичай краще, особливо якщо у вас немає вагомих причин змінювати його на fish. 

```lua
vim.opt.shell = "/bin/sh"
```

Дивіться [fish-shell/fish-shell#7004](https://github.com/fish-shell/fish-shell/issues/7004) та `:h 'shell'` для додаткової інформації.

## Мовний сервер XXX не запускається!

### Оновіть node

Певні мовні сервери покладаються на новішу версію node. Оновіть версію node до останньої.

### чи це перевизначено?

Це може бути пов'язано з тим, що сервер [перевизначено](../configuration/language-features/language-servers.md#server-override)

```lua
--- чи він взагалі в списку?
:lua print(vim.inspect(lvim.lsp.automatic_configuration.skipped_servers))
```

Якщо це так, то вам потрібно або видалити його зі списку, або виконати `:LvimCacheReset` повторно

```lua
vim.tbl_map(function(server)
  return server ~= "emmet_ls"
end, lvim.lsp.automatic_configuration.skipped_servers)
```

або встановити [вручну](../configuration/language-features/language-servers.md#server-setup).

### чи він підтримується [nvim-lsp-installer](https://github.com/williamboman/nvim-lsp-installer)?

Будь-який сервер, який не відображається у `LspInstallInfo`, потрібно встановити вручну.

### він хоча б показується в `:LspInfo`?

Перевірте підказки для [налагоджувача nvim-lspconfig](https://github.com/neovim/nvim-lspconfig#debugging).

## Занадто багато мовних серверів запускається одночасно!

Чи [перевизначено](../configuration/language-features/language-servers.md#server-override) якийсь з цих серверів за замовчуванням?

```lua
:lua print(vim.inspect(require("lvim.lsp.config").override))
```

Якщо вони є, то ви використовуєте синтаксис перед [LunarVim#1813](https://github.com/LunarVim/LunarVim/pull/1813).

```lua
-- this is the correct syntax since 3dd60bd
vim.list_extend(lvim.lsp.override, { "jsonls" })
```

```lua
-- this the correct syntax since 198577a
vim.list_extend(lvim.lsp.automatic_configuration.skipped_servers, { "jsonls" })
```

## Мій LunarVim має жахливий вигляд!

- Переконайтеся, що ваш термінал підтримує 24-бітові кольори. Якщо ні, ви можете зіткнутися з деякими проблемами, пов'язаними з типовою схемою кольорів та іншими схемами кольорів.

  - Для отримання інформації про те, що таке 24-бітові кольори, а також для перевірки того, чи підтримує їх ваш термінал, скористайтеся цим корисним репозиторієм: https://github.com/termstandard/colors.

- Іншою проблемою може бути `termguicolors`. Якщо це так, радимо вам звернутися до офіційної документації neovim:

  - Що таке `termguicolors`? див. <https://neovim.io/doc/user/options.html#'termguicolors'>

- Іншим випадком може бути те, що ваша змінна `$TERM` змінює кольори у вашому терміналі.

  - Для цього ми радимо вам подивитися, чи є у когось ще така сама змінна `$TERM`, як у вас, і що вони зробили https://github.com/neovim/neovim/issues?q=label%3Atui+color


