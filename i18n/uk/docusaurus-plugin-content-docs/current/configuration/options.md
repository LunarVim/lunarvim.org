---
sidebar_position: 1
---

# Параметри

[Параметри](#neovim-options) використовуються для налаштування редактора,
[змінні](#neovim-variables) для налаштуванняплагінів vimscript.

## Параметри Neovim

Дивіться [`:help lua-guide-options`](https://neovim.io/doc/user/lua-guide.html#lua-guide-options) для подробиць.

- Для встановлення параметрів:

  ```lua
  vim.opt.{option} = {value}
  ```

- Для отримання параметрів:

  ```lua
  vim.opt.{option}:get()
  ```

### Приклади параметрів

```lua
vim.opt.cmdheight = 2 -- більше місця в командному рядку neovim для відображення повідомлень
vim.opt.guifont = "monospace:h17" -- шрифт, який використовується в графічних застосунках neovim
vim.opt.shiftwidth = 2 -- кількість пробілів, вставлених для кожного відступу
vim.opt.tabstop = 2 -- вставляти 2 пробіли для tab
vim.opt.relativenumber = true -- відносні номери рядків
vim.opt.wrap = true -- переніс рядків

-- use treesitter folding
vim.opt.foldmethod = "expr"
vim.opt.foldexpr = "nvim_treesitter#foldexpr()"
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/8O6o3p7CN7Q" title="Відео-програвач YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

## Змінні Neovim

Дивіться [`:help lua-guide-variables`](https://neovim.io/doc/user/lua-guide.html#lua-guide-variables) для подробиц.

- Для отримання та встановлення змінних використовуйте:

  ```lua
  vim.g.{name} -- глобальні змінні (g:)
  vim.b.{name} -- змінні для поточного буферу (b:)
  vim.w.{name} -- змінні для поточного вікна (w:)
  vim.t.{name} -- змінні для поточної вкладки (t:)
  vim.v.{name} -- передвстановлені Vim змінні (v:)
  vim.env.{name} -- змінні оточення, що визначені в сесії редактора
  ```
