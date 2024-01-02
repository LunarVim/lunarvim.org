---
sidebar_position: 6
---

# Автокоманди

Щоб налаштувати автокоманди, використовуйте власний API nvim `vim.api.nvim_create_autocmd` або скористайтеся допоміжною таблицею Lunarvim `lvim.autocommands`, яка буде передана в [define_autocmds()](https://github.com/LunarVim/lunarvim/blob/3475f7675d8928b49c85878dfc2912407de57342/lua/lvim/core/autocmds.lua#L177) автоматично.

```lua
lvim.autocommands = {
    {
        "BufEnter", -- see `:h autocmd-events`
        { -- this table is passed verbatim as `opts` to `nvim_create_autocmd`
            pattern = { "*.json", "*.jsonc" }, -- see `:h autocmd-events`
            command = "setlocal wrap",
        }
    },
}
```

Це запустить команду під час певної події для заданого типу файлу.

Приклад використання nvim API може виглядати так:

```lua
vim.api.nvim_create_autocmd("BufEnter", {
	  pattern = { "*.json", "*.jsonc" },
	  -- enable wrap mode for json files only
	  command = "setlocal wrap",
})
```

Ви також можете додати зворотні виклики(колбеки) lua

```lua
lvim.autocommands = {
    {
      "BufWinEnter", {
      pattern = { "*.cpp", "*.hpp" },
      callback = function()
        -- DYI editorconfig
        if vim.loop.cwd() == "path/to/my/project" then
          vim.cmd [[setlocal tabstop=8 shiftwidth=8]]
        end
      end
    },
  }
}
```
