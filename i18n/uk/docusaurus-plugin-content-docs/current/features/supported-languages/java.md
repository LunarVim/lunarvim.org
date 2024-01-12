# Java

## Установлення підсвічування синтаксису

```vim
:TSInstall java
```

## Підтримувані мовні сервери

- jdtls

## Підтримувані форматувальники коду

- astyle
- clang_format
- google_java_format
- npm_groovy_lint
- uncrustify

Сервер мови Java (jdtls) також підтримує форматування, і за замовчуванням він увімкнений. Ви можете налаштувати його правила форматування, але також можна використовувати інший форматувальник з наведеного вище списку. Коли використовується такий форматувальник, форматування jdtls буде вимкнено, щоб уникнути конфлікту.


### jdtls

jdtls встановлюється автоматично, коли ви вперше відкриєте `.java` файл.

:::note

jdtls повинно бути **jdk-17 або новіше** для запуску.

:::

Neovim ( типово) передає основні параметри (такі як `vim.opt.shiftwidth` та `vim.opt.tabstop`) мовному серверу під час форматування.

Можна додатково налаштувати форматування jdtls, надавши файл форматування Eclipse.

Для цього введіть `:LspSettings jdtls`. Буде створено JSON-файл за адресою `.config/lvim/lsp-settings/jdtls.json`, який можна розглядати як глобальні налаштування.

Додайте наступний вміст:


```json
{
  "java.format.settings.profile": "GoogleStyle",
  "java.format.settings.url": "https://raw.githubusercontent.com/google/styleguide/gh-pages/eclipse-java-google-style.xml"
}
```

Щоб посилатися на локальний файл в атрибуті url, просто задайте його шлях:: `"java.format.settings.url": ".config/lvim/custom-formatter.xml"`

Також можна вказати специфічні для проєкту конфіги. Для цього введіть `:LspSettings local jdtls`, який створить `.nlsp-settings/jdtls.json` у поточній робочій папці, і вставте конфіг, який ви використовували для глобальних налаштувань.
Більше інформації про команди LSP ви можете знайти тут: https://github.com/tamago324/nlsp-settings.nvim

### Користувацькі форматувальники 

Користувацькі форматувальники - це інструменти інтерфейсу командного рядка, які обгорнуті плагіном null-ls, який за замовчуванням доступний у LunarVim. Їх слід встановлювати окремо від LunarVim, і вони мають бути доступні у $PATH.


#### clang-format

clang-формат традиційно використовується для форматування C/C++ коду, але також може бути використаний для форматування Java коду.

Необхідні умови:
clang-format має бути у $PATH

Увімкніть форматувальник файлі `~/.config/lvim/config.lua`:

```lua
local formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup {
  {
    command = "clang-format",
    filetypes = { "java" },
  }
}
```

У наведеній вище конфігурації буде використано налаштування за замовчуванням. Щоб переглянути налаштування за замовчуванням, введіть у терміналі `clang-format --dump-config`.

clang-format підтримує декілька попередньо визначених стилів. Список значень можна знайти за посиланням: https://clang.llvm.org/docs/ClangFormatStyleOptions.html#configurable-format-style-options.

Щоб вказати такий стиль, потрібно задати додаткові аргументи у файлі `config.lua`:

```lua
  {
    command = "clang-format",
    filetypes = { "java" },
    extra_args = { "--style", "Google" },
  }
```

Також можна використовувати файл формату. Для цього вам знадобиться дійсний файл формату clang. Ви можете створити його на основі наявного стилю, який можна використати як базовий: `clang-format --style=Google --dump-config > .clang-format`

`config.lua`:

```lua
  {
    command = "clang-format",
    filetypes = { "java" },
    extra_args = { "--style", "file:<format_file_path>" },
  }
```

#### google-java-format

google-java-format - програма, яка переформатовує вихідний код Java відповідно до Google Java Style.

Передумови:
google-java-format має бути на $PATH

Увімкніть формальник у `~/.config/lvim/config.lua`:

```lua
formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup {
  {
    command = "google-java-format",
    filetypes = { "java" },
  }
}
```

#### uncrustify

unrustify працює аналогічно до clang-форматувальника.

Увімкніть формальтувальник у `~/.config/lvim/config.lua`:

```lua
formatters = require "lvim.lsp.null-ls.formatters"
formatters.setup {
  {
    command = "uncrustify",
    filetypes = { "java" },
    extra_args = { "-c", "path/to/your.cfg" },
  }
}
```

## Підтримувані лінтери

```lua
{ "checkstyle", "pmd", "semgrep" }
```

## Advanced configuration

Також можна повністю налаштувати мовний сервер. Дивіться https://github.com/LunarVim/starter.lvim, щоб дізнатися, як це зробити.
