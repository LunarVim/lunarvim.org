---
sidebar_position: 2
---

# Огляд плагінів

LunarVim підтримує широкий спектр плагінів для поліпшення функціональності текстового редактора Neovim. Цей посібник познайомить вас із основними плагінами ядра, які є частиною LunarVim.

## Основні плагіни

LunarVim також містить набір [основних плагінів](../../features/core-plugins-list), які попередньо налаштовані та надаються з коробки. Ці плагіни пропонують основні функції та функції.

Ці плагіни є лише відправною точкою, і є багато інших доступних для вивчення. Не забувайте читати документацію та експериментувати з різними плагінами, щоби знайти ті, які відповідають вашому робочому процесу та вподобанням.

## Деталі основних плагінів

### Налаштування Neovim LSP

Плагін `nvim-lspconfig` забезпечує легку конфігурацію для вбудованого клієнта Language Server Protocol (LSP) у Neovim. Це спрощує процес налаштування для різних мовних серверів, увімкнувши такі функції, як завершення коду, лінтування тощо.

### nvim-treesitter

`nvim-treesitter` надає Neovim розширені можливості підсвічування синтаксису та аналізу. Це поліпшує точність підсвічування коду, поліпшує відступи та дозволяє використовувати різні функції, специфічні для мови.

### Телескоп

`Telescope` — це плагін нечіткого шукача з можливістю розширення. Він забезпечує потужний інтерфейс для пошуку файлів, буферів та інших ресурсів у вашому середовищі Neovim. Завдяки інтуїтивно зрозумілій навігації та параметрам, які можна налаштувати, він спрощує процес пошуку та відкриття файлів.

### NvimTree

`NvimTree`, широко розповсюджений плагін Neovim, збагачує досвід кодування, бездоганно інтегруючи бічну панель провідника файлів в інтерфейс. Ця функція оптимізує ефективність робочого процесу та безперебійне керування файлами. NvimTree пропонує низку параметрів налаштування, забезпечуючи узгодження з уподобаннями користувачів. Використовуючи такі поширені комбінації клавіш, як `o` для відкриття файлів і `d` для перемикання папок, NvimTree значно спрощує процес програмування.

### Auto Pairs

`Auto Pairs` автоматично вставляє відповідні пари дужок, лапок та інших символів під час введення. Це економить час і зменшує ймовірність невідповідності пар. Цей плагін значно покращує досвід редагування та допомагає запобігти синтаксичним помилкам.

### Comment.nvim

`Comment.nvim` спрощує процес коментування та розкоментування блоків коду. Він підтримує різні мови програмування та забезпечує прив’язки клавіш для швидкого перемикання коментарів. Цей плагін полегшує коментування коду та покращує читабельність.

### Gitsigns

Якщо ви використовуєте Git для контролю версій, `Gitsigns` є цінним плагіном. Він показує маркери відмінностей Git і знаки всередині поля, що вказує на додані, змінені або видалені рядки. Це допоможе вам візуалізувати зміни та відстежувати стан ваших файлів безпосередньо в Neovim.

### Lualine

`Lualine` — це настроюваний плагін рядка стану для Neovim. Це дозволяє відображати різноманітну інформацію, таку як поточний режим, шлях до файлу та гілку Git, у вашому рядку стану. Завдяки простій конфігурації ви можете персоналізувати вигляд і вміст рядка стану.

### Який ключ

`Which-key` надає спливне вікно, яке показує прив’язки клавіш і пов’язані з ними команди. Це допоможе вам знайти та запам’ятати доступні прив’язки клавіш у Neovim. Цей плагін особливо корисний для початківців, які хочуть вивчити та вивчити різноманітні функції, які пропонує Neovim та його плагіни.

## Установлення та налаштування плагінів

Керування плагінами в LunarVim здійснюється за допомогою [folke/lazy.nvim](https://github.com/folke/lazy.nvim). Щоб установити плагіни, вам потрібно додати записи до таблиці `lvim.plugins` у вашому `config.lua`. Більше про налаштування плагінів ви можете прочитати на [цій сторінці](../../configuration/plugins).
