---
sidebar_position: 6
---

# 自动指令

要设置自动指令，使用原生的nvim api `vim.api.nvim_create_autocmd`，或使用LunarVim字典 `lvim.autocommands`，它将被自动地传递到[define_autocmds()](https://github.com/LunarVim/lunarvim/blob/3475f7675d8928b49c85878dfc2912407de57342/lua/lvim/core/autocmds.lua#L177)

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

这将在给定的事件中为给定的文件类型运行指令。

一个使用nvim api的例子可以是这样的：

```lua
vim.api.nvim_create_autocmd("BufEnter", {
	  pattern = { "*.json", "*.jsonc" },
	  -- enable wrap mode for json files only
	  command = "setlocal wrap",
})
```

你也可以添加lua回调：

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
