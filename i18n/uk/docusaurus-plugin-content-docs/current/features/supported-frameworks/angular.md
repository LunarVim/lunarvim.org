# Angular

## Ліпша підсвітка синтаксису

Можливо ви хочете додати цей плагін до вашої конфігурації. Він надає інтеграцію фреймворка Angular з treesitter.

```lua
{ "nvim-treesitter/nvim-treesitter-angular" }
```

## Установіть мовний сервер 
```vim
:LspInstall angularls
```

## Налаштуйте LunarVim

Сервер `angularls` перезаписаний за замовчуванням. Тому вам потрібно його 
[вручну налаштувати](/configuration/language-features/language-servers.md#server-override).

### Установлення

Додайте це до вашого файлу `config.lua`:

```lua
require("lvim.lsp.manager").setup("angularls")
```

Детальніше про LSP, як-от типові значенні, [можете дізнатися тут](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#angularls).

:::note

Для проєктів Angular з версією менше ніж 9 (до Ivy) ви повинні надати LSP прапор `--viewEngine`.

:::
