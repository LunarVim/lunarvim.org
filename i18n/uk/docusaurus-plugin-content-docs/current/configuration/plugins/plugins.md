# Плагіни

Плагінами керує [folke/lazy.nvim](https://github.com/folke/lazy.nvim).

:::tip

використовуйте `:Lazy`, щоби побачити список усіх встановлених плагінів!

:::

# Встановлення плагінів

Користувацькі плагіни можна встановити, додавши записи до таблиці lvim.plugins у
ваш файл `config.lua`, зберігши або вручну викликавши `LvimReload` запустить
плагін lazy для синхронізації всіх плагінів в цій таблиці.

приклад:

```lua
lvim.plugins = {
  { "lunarvim/colorschemes" },
  {
    "stevearc/dressing.nvim",
    config = function()
      require("dressing").setup({
        input = { enabled = false },
      })
    end,
  },
  {
    "nvim-neorg/neorg",
    ft = "norg", -- lazy-load on filetype
    config = true, -- запускає require("neorg").setup()
  },
}
```

:::tip

Ви можете знайти всі доступні налаштування [тут](https://github.com/folke/lazy.nvim#-plugin-spec)
або в lunarvim: `:help lazy.nvim-plugin-spec`
Ви можете знайти [тут](https://github.com/folke/lazy.nvim#examples) більше прикладів

:::

:::info

Видалення плагіна з таблиці `lvim.plugins` видаляє його з вашої конфігурації, але не з вашої системи. Щоб видалити їх повністю, запустіть `:Lazy clean`

:::

## Основні плагіни

Конфігурації для основних плагінів доступні через таблицю `lvim.builtin`.

### Вимкнення основних плагінів

Більшість має містити атрибут `active`, який можна встановити на `false`, щоби вимкнути
плагін

```lua
lvim.builtin.alpha.active = false
lvim.builtin.dap.active = false
```

:::caution

Вимкнення плагіна не почне діяти, доки ви не перезапустите lvim.

:::

### Налаштування основних плагінів

Щоби налаштувати вбудований плагін, відредагуйте параметри в `lvim.builtin.<builtin>`.
Ви можете натиснути `<TAB>`, щоб отримати пропозиції автозавершення для вивчення цих налаштувань.

```lua
lvim.builtin.cmp.completion.keyword_length = 2
lvim.builtin.telescope.defaults.layout_config.width = 0.95
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 75
```

:::tip

README плагіна (та папка `docs/`, якщо вона існує) зазвичай містить чудову документацію, тому, можливо, варто створити скоровчення, якщо ви часто використовуєте його.

:::

### Закріплення

Версії основних плагінів закріплені для кращої стабільності,
Ви можете вимкнути закріплення, встановивши змінну середовища `$LVIM_DEV_MODE`, наприклад, можна визначити в `~/.local/bin/lvim` або у файлі rc вашої оболонки:

```bash
export LVIM_DEV_MODE=1
# or 
alias lvim="LVIM_DEV_MODE=1 lvim"
```
