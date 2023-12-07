---
sidebar_position: 3
---

# Keybinds overview

Here's an overview of the most commonly used mappings.
It is not a complete list, you can find more by pressing `<leader>sk` to search through them,
or `<leader>` to show whichkey (keybinds popup)

Also see:
[vim mappings](https://devhints.io/vim)

**Підказка:** `<leader>` is space by default, read [`:help keycodes`](https://neovim.io/doc/user/intro.html#keycodes) for more key names

**Підказка:** `<M>` is `alt` on Windows/Linux and `option` on macOS

**Підказка:** For macOS users: For the `option` key (`⌥`) to work as `<M>` you may need to adjust some settings:
- For iTerm2: Select `Esc+` as the Option key setting in [ Preferences - Profiles - Keys ](https://github.com/LunarVim/lunarvim.org/pull/377#discussion_r1140747022)
- For Alacritty: Make sure you're on Alacritty version >= 0.12.0. In your `alacritty.yml` config file, set `window.option_as_alt` to `Both` or `OnlyLeft` \ `OnlyRight` per your preference (https://github.com/alacritty/alacritty/issues/62).

**Підказка:** Non-leader keybindings (for e.g. `<C-\>`, mentioned below and others) can be viewed
by pressing `<backspace>` in the which-key main menu (first popup after pressing `<leader>`)

## Плагіни

| клавіші                       | опис                                                                                            | режим  |
| ----------------------------- | ----------------------------------------------------------------------------------------------- | ------ |
| `<leader>`                    | [whichkey](https://github.com/folke/which-key.nvim) (спливаюче вікно з прив'язками клавіш (з'являється через 1 секунду))        | normal |
| `<leader>e`                   | [nvimtree](https://github.com/nvim-tree/nvim-tree.lua) (бічний файловий провідник)                     | normal |
| `<leader>f` `<leader>s`(menu) | [telescope](https://github.com/nvim-telescope/telescope.nvim) (знайти файли, текст та більше) | normal |
| `<leader>;`                   | [alpha](https://github.com/goolord/alpha-nvim) (інформаційна панель)                                      | normal |
| `<C-\>` `<M-1/2/3>`           | [toggleterm](https://github.com/akinsho/toggleterm.nvim) (термінал)                             | normal |

## LSP

| клавіші| опис                                         | режим  |
| ------ | -------------------------------------------- | ------ |
| `K`    | hover information (double tap to get inside) | normal |
| `KK`   | move cursor inside `K` window                | normal |
| `gd`   | go to definition                             | normal |
| `gD`   | go to declaration                            | normal |
| `gr`   | go to references                             | normal |
| `gI`   | go to implementation                         | normal |
| `gs`   | show signature help                          | normal |
| `gl`   | show line diagnostics                        | normal |
| `glgl` | move cursor inside `gl` diagnostics window   | normal |

## Редагування

| клавіші     | опис              | режим          |
| ----------- | ----------------- | -------------- |
| `<leader>/` | закоментувати           | normal, visual |
| `gb`        | block comment     | visual         |
| `<M-k>`     | перемістити лінію або лінії вгору   | normal, visual |
| `<M-j>`     | перемістити лінію або лінії вниз | normal, visual |

## Completion

| клавіші                    | опис                                   | режим  |
| -------------------------- | -------------------------------------- | ------ |
| `<C-space>`                | show completion menu                   | insert |
| `<CR>` `<C-y>`             | підтвердити                               | insert |
| `<C-e>`                    | скасувати                                 | insert |
| `<C-k>` `<Up>` `<Tab>`     | вибрати попередній предмет                 | insert |
| `<C-j>` `<Down>` `<S-Tab>` | вибрати наступний предмет                       | insert |
| `<C-d>`                    | scroll docs up                         | insert |
| `<C-f>`                    | scroll docs down                       | insert |
| `<CR>` `<Tab>`             | jump to next jumpable in a snippet     | insert |
| `<S-Tab>`                  | jump to previous jumpable in a snippet | insert |

## Вікна

| клавіші     | опис                   | режим  |
| ----------- | ---------------------- | ------ |
| `<C-h>`     | перейти в ліве вікно      | normal |
| `<C-j>`     | перейти в нижнє вікно     | normal |
| `<C-k>`     | перейти в верхнє вікно     | normal |
| `<C-l>`     | перейти в праве вікно     | normal |
| `<C-Up>`    | зменшити висоту вікна | normal |
| `<C-Down>`  | збільшити висоту вікна | normal |
| `<C-Left>`  | зменшити ширину вікна | normal |
| `<C-Right>` | збільшити ширину вікна  | normal |

## Різне

| клавіші      | опис                      | режим  |
| ------------ | ------------------------- | ------ |
| `<leader>Lc` | редагувати config.lua           | normal |
| `<leader>h`  | очистити підсвітку пошуку | normal |
| `<leader>sh` | шукати в `:help`    | normal |
| `<leader>sr` | відкрити нещодавні файли         | normal |
| `<leader>pS` | список встановлених плагінів | normal |

## [nvimtree](https://github.com/nvim-tree/nvim-tree.lua) (бічний файловий провідник)

`g?` показати сполучення клавіш 
