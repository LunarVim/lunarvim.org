# Мовні можливості

LunarVim прагне підтримувати всі основні мови. Це стало можливим завдяки використанню деяких чудових плагінів
з екосистеми Neovim. Такими плагінами є [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) для підтримки LSP та
[Null-ls](https://github.com/jose-elias-alvarez/null-ls.nvim) для забезпечення підтримки роботи із зовнішніми форматерами, такими як
як [prettier](https://github.com/prettier/prettier) та [eslint](https://github.com/eslint/eslint). Крім того,
LunarVim інтегрується з [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) для забезпечення багатого синтаксису
підсвічування та інші магії синтаксичного розбору.

Якщо ваша мова не підтримується, будь ласка, перевірте наступні посилання і створіть тікет.

- Перевірте, чи доступна підтримка LSP у lspconfig [репозиторії](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md)
- Перевірте, чи доступний ваш лінтер або форматувальник у null-ls [репозиторії](https://github.com/jose-elias-alvarez/null-ls.nvim/blob/main/doc/BUILTINS.md)
- Перевірте, чи підтримується ваш синтаксис у treesitter [репозиторії](https://github.com/nvim-treesitter/nvim-treesitter)

## At a glance

За допомогою наведених нижче команд ви можете перевірити деяку інформацію про будь-які мовні сервери, які ви налаштували.

- `:LvimInfo`

  - Містить інформацію про всі сервери, приєднані до буфера, який ви редагуєте, та їхні поточні можливості, як-от форматування і підтримка переходу до визначення. Він також містить інформацію про всі лінтери і форматувальник, які налаштовано або може бути налаштовано.
  - сполучення клавіш: `<leader>Li`

- `:LspInfo`

  - Містить основну інформацію про всі запущені сервери.
  - сполучення клавіш: `<leader>li`

- `:Mason`

  - Містить інформацію про всі сервери, якими ви можете керувати за допомогою [mason](https://github.com/williamboman/mason.nvim).
  - сполучення клавіш: `<leader>lI`
