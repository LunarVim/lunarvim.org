# Розробка Lunarvim

## Початок роботи

Ми рекомендуємо зробити символьне посилання на ваш форк:

```bash
cd ~/.local/share/lunarvim/
ln -s ~/dev/Lunarvim ~/.local/share/lunarvim/lvim_dev
```

На виході повинно вийти щось на кшталт:

```bash
$ ls -a
lrwxrwxrwx  1 user user   37 sep 23 14:35 lvim_dev -> /home/user/dev/LunarVim
```

---

Тепер переведіть ваш lvim у режим розробки:

```bash
cd ~/.local/share/lunarvim/
mv lvim lvim_back
mv lvim_dev lvim
```

---

Повернімося в lvim

```bash
cd ~/.local/share/lunarvim/
mv lvim lvim_dev
mv lvim_back lvim
```

Щоб перевірити, що ви можете отримати деякий вивід з `lvim`, додайте наступне до вашого файлу `init.lua` у вашому форку.


```lua
print ("it works")
```

```bash
lvim
```

Тепер введіть `:messages`. Бажаємо гарної розробки!

## Lua + Neovim = :heart:

Для початку, [цей посібник](https://github.com/nanotee/nvim-lua-guide) охоплює багато моментів, які допоможуть вам почати роботу з Lua і тим, як працює Neovim.

## Офіційна документація

Цей [довідковий посібник](https://www.lua.org/manual/5.4/) є офіційним посібником мови Lua.

Якщо ви не знаєте про це, [DevDocs](https://devdocs.io/lua~5.4/) об'єднує декілька документацій API у швидкому, організованому інтерфейсі з можливістю пошуку.

## Документація Neovim

Neovim надає [стандартну бібліотеку](https://neovim.io/doc/user/lua.html), про яку вам варто знати.

Вона надає багато функцій, які ви хотіли б реалізувати у stdlib Lua, наприклад `strings.split`.

Він також постачається з [фреймворком LSP](https://neovim.io/doc/user/lsp.html) та [багато іншого](https://neovim.io/doc/user/).

## Посібник зі стилів

LuaRock [посібник зі стилів](https://github.com/luarocks/lua-style-guide) - це повноцінна робота, яка заслуговує на увагу, якщо ви хочете навчитися писати послідовний та надійний код.

Він базується на багатьох попередніх посібниках, надає обґрунтування всіх своїх рішень і успішно працював у довготривалому проекті.

## Якість коду

Для забезпечення якості коду та узгодженого стилю наш [CI](https://github.com/Lunarvim/LunarVim/actions) використовує наступні інструменти:

- Lua:
  - [Stylua](https://github.com/JohnnyMorganz/StyLua). Форматник коду на Lua з власною думкою.
  - [Luacheck] (https://github.com/mpeterv/luacheck). Інструмент для лінкування та статичного аналізу Lua коду.
- Оболонка
  - [Shfmt](https://github.com/mvdan/sh). Синтаксичний аналізатор, форматувлаьник та інтерпретатор оболонки з підтримкою bash.
  - [Shellcheck](https://github.com/koalaman/shellcheck). Інструмент статичного аналізу скриптів командного рядка.
