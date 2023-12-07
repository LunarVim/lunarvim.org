---
sidebar_position: 2
---

# Після встановлення 

## Додайте `lvim` до `$PATH`

Якщо ваш термінал не може знайти команду `lvim`, [додайте папку встановлення до вашого шляху](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7) або перемістіть команду lvim кудись в наявних шлях з PATH. Типова папка для встановлення: `~/.local/bin`.

## Установіть [Nerd Font](https://www.nerdfonts.com/)

LunarVim використовує іконки з Nerd Fonts. Якщо ви не хочете їх використовувати, тоді встановіть параметр `lvim.use_icons` на false.

### Простий встановлювач

Відвідайтe [ronniedroid/getnf](https://github.com/ronniedroid/getnf) для легшого шляху встановлення Nerd Fonts.

### Відео-пояснення

<iframe width="560" height="315" src="https://www.youtube.com/embed/fR4ThXzhQYI" title="Програвач відео YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

### Ручне встановлення 

1. Перейдіть до [каталогу оновлених шрифтів](https://www.nerdfonts.com/font-downloads)
2. Скопіююйте завантажені файли до `~/.local/share/fonts`

### Завантаження через curl

```bash
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLO https://github.com/ryanoasis/nerd-fonts/raw/HEAD/patched-fonts/DroidSansMono/DroidSansMNerdFont-Regular.otf
```

### Налаштування в терміналі

Після встановлення шрифту вам потрібно буде оновити кеш шрифтів командою `fc-cache -f -v`. Після цього вам потрібно буде змінити налаштування вашого терміналу для використання шрифту, який ви щойно встановили. Будь ласка, зверніться до документації вашого терміналу для зміни шрифту терміналу.
