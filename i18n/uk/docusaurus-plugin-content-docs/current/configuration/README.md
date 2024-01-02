# Конфігурація

Ви можете налаштувати LunarVim за допомогою конфігураційного файлу, розташованого у `~/.config/lvim/config.lua`.

Для швидкого початку роботи, скопіюйте приклад конфігураційного файлу

```bash
cp ~/.local/share/lunarvim/lvim/utils/installer/config.example.lua ~/.config/lvim/config.lua
```

Багато внутрішніх налаштувань LunarVim доступні за допомогою глобального об'єкта `lvim`.
Щоби переглянути список усіх доступних налаштувань, виконайте цю команду з `~/.config/lvim/` або `~/.local/share/lunarvim/lvim`, щоб згенерувати файл `lv-settings.lua`.

```bash
lvim --headless +'lua require("lvim.utils").generate_settings()' +qa && sort -o lv-settings.lua{,}
```

Ось приклад вихідних даних.

```lua
lvim.builtin.telescope.defaults.initial_mode = "insert"
lvim.builtin.telescope.defaults.layout_config.horizontal.mirror = false
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 120
lvim.builtin.telescope.defaults.layout_config.prompt_position = "bottom"
lvim.builtin.telescope.defaults.layout_config.vertical.mirror = false
lvim.builtin.telescope.defaults.layout_config.width = 0.75
lvim.builtin.telescope.defaults.layout_strategy = "horizontal"
```

Якщо ви хочете продовжувати запускати LunarVim командою `nvim`, додайте запис про псевдонім до конфігураційного файлу вашої оболонки: `alias nvim=lvim`. Щоб тимчасово повернутися до стандартного nvim, додайте до нього зворотний слеш `\nvim`. Якщо ви створюєте цей псевдонім, ви також можете явно вказати ваш редактор `export EDITOR='lvim'`. Це вкаже інструментам командного рядка, таким як git, використовувати LunarVim як ваш редактор.
