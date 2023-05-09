---
sidebar_position: 3
---

# 示例配置

每个与Neovim兼容的插件都与LunarVim兼容，这里有一些示例可以帮助您入门。

:::tip

因为翻译可能不及时，以及准确度问题，完整示例配置请查看英文版

:::

## 导航插件

### [hop](https://github.com/phaazon/hop.nvim)

**快速移动neovim!**

```lua
{
  "phaazon/hop.nvim",
  event = "BufRead",
  config = function()
    require("hop").setup()
    vim.api.nvim_set_keymap("n", "s", ":HopChar2<cr>", { silent = true })
    vim.api.nvim_set_keymap("n", "S", ":HopWord<cr>", { silent = true })
  end,
},
```

### [lightspeed](https://github.com/ggandor/lightspeed.nvim)

**jetpack 代码库导航**

对于更轻量级，更容易使用的替代品，可以查看作者新开发的插件`leap.nvim`。
下面是配置示例。

```lua
{
  "ggandor/lightspeed.nvim",
  event = "BufRead",
},
```

### [leap](https://github.com/ggandor/leap.nvim)

**Neovim对鼠标的回答**

```lua
{
  "ggandor/leap.nvim",
  as = "leap",
  config = function()
    require("leap").add_default_mappings()
  end,
},
```

### [minimap](https://github.com/wfxr/minimap.vim)

**用Rust开发的 快速的 迷你地图/滚动条**

```lua
{
  'wfxr/minimap.vim',
  build = "cargo install --locked code-minimap",
  -- cmd = {"Minimap", "MinimapClose", "MinimapToggle", "MinimapRefresh", "MinimapUpdateHighlight"},
  config = function ()
    vim.cmd ("let g:minimap_width = 10")
    vim.cmd ("let g:minimap_auto_start = 1")
    vim.cmd ("let g:minimap_auto_start_win_enter = 1")
  end,
},
```

### [numb](https://github.com/nacro90/numb.nvim)

**行间跳跃**

```lua
{
  "nacro90/numb.nvim",
  event = "BufRead",
  config = function()
  require("numb").setup {
    show_numbers = true, -- Enable 'number' for the window while peeking
    show_cursorline = true, -- Enable 'cursorline' for the window while peeking
  }
  end,
},
```

### [nvim-bqf](https://github.com/kevinhwang91/nvim-bqf)

**更好的快速修复窗口**

```lua
{
  "kevinhwang91/nvim-bqf",
  event = { "BufRead", "BufNew" },
  config = function()
  require("bqf").setup({
          auto_enable = true,
          preview = {
          win_height = 12,
          win_vheight = 12,
          delay_syntax = 80,
          border_chars = { "┃", "┃", "━", "━", "┏", "┓", "┗", "┛", "█" },
          },
          func_map = {
          vsplit = "",
          ptogglemode = "z,",
          stoggleup = "",
          },
          filter = {
          fzf = {
          action_for = { ["ctrl-s"] = "split" },
          extra_opts = { "--bind", "ctrl-o:toggle-all", "--prompt", "> " },
          },
          },
          })
  end,
},
```

### [nvim-spectre](https://github.com/windwp/nvim-spectre)

**搜索和替换**

```lua
{
  "windwp/nvim-spectre",
  event = "BufRead",
  config = function()
    require("spectre").setup()
  end,
},
```

### [neo-tree](https://github.com/nvim-neo-tree/neo-tree.nvim)

**neo-tree是一个用来管理文件系统和其他树状结构的插件**

```lua
{
  "nvim-neo-tree/neo-tree.nvim",
  branch = "v2.x",
  dependencies = {
    "nvim-lua/plenary.nvim",
    "nvim-tree/nvim-web-devicons",
    "MunifTanjim/nui.nvim",
  },
  config = function()
    require("neo-tree").setup({
      close_if_last_window = true,
      window = {
        width = 30,
      },
      buffers = {
        follow_current_file = true,
      },
      filesystem = {
        follow_current_file = true,
        filtered_items = {
          hide_dotfiles = false,
          hide_gitignored = false,
          hide_by_name = {
            "node_modules"
          },
          never_show = {
            ".DS_Store",
            "thumbs.db"
          },
        },
      },
    })
  end
},
```

安装后确保在您的 `config.lua` 中禁用 `nvim-tree` ：

```lua
...
lvim.builtin.nvimtree.active = false -- NOTE: using neo-tree
...
```

### [rnvimr](https://github.com/kevinhwang91/rnvimr)

**Ranger文件资源管理器窗口**

```lua
{
  "kevinhwang91/rnvimr",
    cmd = "RnvimrToggle",
    config = function()
      vim.g.rnvimr_draw_border = 1
      vim.g.rnvimr_pick_enable = 1
      vim.g.rnvimr_bw_enable = 1
      end,
},
```

### [snap](https://github.com/camspiers/snap)

**快速查找系统**

```lua
{
  "camspiers/snap",
  rocks = "fzy",
  config = function()
    local snap = require "snap"
    local layout = snap.get("layout").bottom
    local file = snap.config.file:with { consumer = "fzy", layout = layout }
    local vimgrep = snap.config.vimgrep:with { layout = layout }
    snap.register.command("find_files", file { producer = "ripgrep.file" })
    snap.register.command("buffers", file { producer = "vim.buffer" })
    snap.register.command("oldfiles", file { producer = "vim.oldfile" })
    snap.register.command("live_grep", vimgrep {})
  end,
},
```

### [vim-matchup](https://github.com/andymass/vim-matchup)

**导航和高亮匹配的词**

```lua
{
  "andymass/vim-matchup",
  event = "CursorMoved",
  config = function()
    vim.g.matchup_matchparen_offscreen = { method = "popup" }
  end,
},

-- enable treesitter integration
lvim.builtin.treesitter.matchup.enable = true
```

### [nvim-window-picker](https://github.com/s1n7ax/nvim-window-picker)

**像nvim-tree一样使用选择器跳到任何窗口**

```lua
{
      "s1n7ax/nvim-window-picker",
      version = "1.*",
      config = function()
        require("window-picker").setup({
          autoselect_one = true,
          include_current = false,
          filter_rules = {
            -- filter using buffer options
            bo = {
              -- if the file type is one of following, the window will be ignored
              filetype = { "neo-tree", "neo-tree-popup", "notify", "quickfix" },

              -- if the buffer type is one of following, the window will be ignored
              buftype = { "terminal" },
            },
          },
          other_win_hl_color = "#e35e4f",
        })
      end,
 }

-- example mappings you can place in some other place
-- An awesome method to jump to windows
local picker = require('window-picker')

vim.keymap.set("n", ",w", function()
  local picked_window_id = picker.pick_window({
    include_current_win = true
  }) or vim.api.nvim_get_current_win()
  vim.api.nvim_set_current_win(picked_window_id)
end, { desc = "Pick a window" })

-- Swap two windows using the awesome window picker
local function swap_windows()
  local window = picker.pick_window({
    include_current_win = false
  })
  local target_buffer = vim.fn.winbufnr(window)
  -- Set the target window to contain current buffer
  vim.api.nvim_win_set_buf(window, 0)
  -- Set current window to contain target buffer
  vim.api.nvim_win_set_buf(0, target_buffer)
end

vim.keymap.set('n', ',W', swap_windows, { desc = 'Swap windows' })

```

## Git

### [diffview](https://github.com/sindrets/diffview.nvim)

**单个标签页中的 git diff**

```lua
{
  "sindrets/diffview.nvim",
  event = "BufRead",
},
```

### [git-blame](https://github.com/f-person/git-blame.nvim)

**展示 git blame**

```lua
{
  "f-person/git-blame.nvim",
  event = "BufRead",
  config = function()
    vim.cmd "highlight default link gitblame SpecialComment"
    vim.g.gitblame_enabled = 0
  end,
},
```

### [gitlinker](https://github.com/ruifm/gitlinker.nvim)

**生成可分享的文件永久链接给若干个git前端主机**

```lua
{
  "ruifm/gitlinker.nvim",
  event = "BufRead",
  config = function()
  require("gitlinker").setup {
        opts = {
          -- remote = 'github', -- force the use of a specific remote
            -- adds current line nr in the url for normal mode
            add_current_line_on_normal_mode = true,
          -- callback for what to do with the url
            action_callback = require("gitlinker.actions").open_in_browser,
          -- print the url after performing the action
            print_url = false,
          -- mapping to call url generation
            mappings = "<leader>gy",
        },
      }
  end,
  dependencies = "nvim-lua/plenary.nvim",
},
```

### [octo](https://github.com/pwntester/octo.nvim)

**编辑和审查GitHub issues和pull requests**

```lua
{
  "pwntester/octo.nvim",
  dependencies = {
    'nvim-lua/plenary.nvim',
    'nvim-telescope/telescope.nvim',
    'nvim-tree/nvim-web-devicons',
  },
  config = function()
    require("octo").setup()
  end,
},
```

### [vim-fugitive](https://github.com/tpope/vim-fugitive)

**git wrapper**

```lua
{
  "tpope/vim-fugitive",
  cmd = {
    "G",
    "Git",
    "Gdiffsplit",
    "Gread",
    "Gwrite",
    "Ggrep",
    "GMove",
    "GDelete",
    "GBrowse",
    "GRemove",
    "GRename",
    "Glgrep",
    "Gedit"
  },
  ft = {"fugitive"}
},
```

### [vim-gist](https://github.com/mattn/vim-gist)

**创建/编辑 Github gists**

```lua
{
  "mattn/vim-gist",
  event = "BufRead",
  dependencies = "mattn/webapi-vim",
},
```

## Treesitter

### [nvim-ts-autotag](https://github.com/windwp/nvim-ts-autotag)

**autoclose 和 autorename html 标签**

```lua
{
  "windwp/nvim-ts-autotag",
  config = function()
    require("nvim-ts-autotag").setup()
  end,
},
```

### [nvim-ts-context-commentstring](https://github.com/JoosepAlviste/nvim-ts-context-commentstring)

**基于光标位置的注释字符串选项**

```lua
{
  "JoosepAlviste/nvim-ts-context-commentstring",
  event = "BufRead",
},
```

### [nvim-ts-rainbow](https://github.com/mrjones2014/nvim-ts-rainbow)

**彩虹括号**

```lua
{
  "mrjones2014/nvim-ts-rainbow",
},
```

在安装后请确保在`config.lua`中启用它：

```
...
lvim.builtin.treesitter.rainbow.enable = true
...
```

### [playground](https://github.com/nvim-treesitter/playground)

**查看 treesitter 信息**

```lua
{
  "nvim-treesitter/playground",
  event = "BufRead",
},
```

### [nvim-treesitter-context](https://github.com/romgrk/nvim-treesitter-context)

**当function不在屏幕内时，在屏幕顶部显示当前function**

```lua
{
    "romgrk/nvim-treesitter-context",
    config = function()
      require("treesitter-context").setup{
        enable = true, -- Enable this plugin (Can be enabled/disabled later via commands)
        throttle = true, -- Throttles plugin updates (may improve performance)
        max_lines = 0, -- How many lines the window should span. Values <= 0 mean no limit.
        patterns = { -- Match patterns for TS nodes. These get wrapped to match at word boundaries.
          -- For all filetypes
          -- Note that setting an entry here replaces all other patterns for this entry.
          -- By setting the 'default' entry below, you can control which nodes you want to
          -- appear in the context window.
          default = {
            'class',
            'function',
            'method',
          },
        },
      }
    end
  },
```

## Telescope 扩展

### 如何安装 telescope 扩展

首先像往常一样按照扩展的说明**把你的telescope扩展添加到插件列表中**(`lvim.plugins = { ... }`)。
有几种方法可以在telescope中注册扩展，但比较安全的是使用telescope的`on_config_done`回调。
在你的`config.lua`中的任何地方创建回调函数。
这个函数将在telescope完成加载后被调用，并将得到telescope作为其唯一的参数。
最后，在`on_config_done`回调中注册你的扩展：

```lua
lvim.builtin.telescope.on_config_done = function(telescope)
  pcall(telescope.load_extension, "frecency")
  pcall(telescope.load_extension, "neoclip")
  -- any other extensions loading
end
```

### [telescope-fzy-native.nvim](https://github.com/nvim-telescope/telescope-fzy-native.nvim)

**编译的fzy风格分类器**

```lua
{
  "nvim-telescope/telescope-fzy-native.nvim",
  build = "make",
  event = "BufRead",
},
```

### [telescope-project](https://github.com/nvim-telescope/telescope-project.nvim)

**项目间切换**

```lua
{
  "nvim-telescope/telescope-project.nvim",
  event = "BufWinEnter",
  setup = function()
    vim.cmd [[packadd telescope.nvim]]
  end,
},
```

## 颜色主题

### [lsp-colors](https://github.com/folke/lsp-colors.nvim)

**lsp诊断高亮组合，并非lsp颜色主题**

```lua
{
  "folke/lsp-colors.nvim",
  event = "BufRead",
},
```

### [lush.nvim](https://github.com/rktjmp/lush.nvim)

**色调创作辅助工具**

```lua
{
  "rktjmp/lush.nvim",
},
```

### [nvim-colorizer](https://github.com/norcalli/nvim-colorizer.lua)

**color highlighter**

```lua
{
  "norcalli/nvim-colorizer.lua",
    config = function()
      require("colorizer").setup({ "css", "scss", "html", "javascript" }, {
          RGB = true, -- #RGB hex codes
          RRGGBB = true, -- #RRGGBB hex codes
          RRGGBBAA = true, -- #RRGGBBAA hex codes
          rgb_fn = true, -- CSS rgb() and rgba() functions
          hsl_fn = true, -- CSS hsl() and hsla() functions
          css = true, -- Enable all CSS features: rgb_fn, hsl_fn, names, RGB, RRGGBB
          css_fn = true, -- Enable all CSS *functions*: rgb_fn, hsl_fn
          })
  end,
},
```

## LSP 增强功能

### [cmp-tabnine](https://github.com/tzachar/cmp-tabnine)

**TabNine completion engine for hrsh7th/nvim-cmp**

```lua
{
  "tzachar/cmp-tabnine",
  build = "./install.sh",
  dependencies = "hrsh7th/nvim-cmp",
  event = "InsertEnter",
},
```

### [goto-preview](https://github.com/rmagatti/goto-preview)

**previewing goto definition calls**

```lua
{
  "rmagatti/goto-preview",
  config = function()
  require('goto-preview').setup {
        width = 120; -- Width of the floating window
        height = 25; -- Height of the floating window
        default_mappings = false; -- Bind default mappings
        debug = false; -- Print debug information
        opacity = nil; -- 0-100 opacity level of the floating window where 100 is fully transparent.
        post_open_hook = nil -- A function taking two arguments, a buffer and a window to be ran as a hook.
        -- You can use "default_mappings = true" setup option
        -- Or explicitly set keybindings
        -- vim.cmd("nnoremap gpd <cmd>lua require('goto-preview').goto_preview_definition()<CR>")
        -- vim.cmd("nnoremap gpi <cmd>lua require('goto-preview').goto_preview_implementation()<CR>")
        -- vim.cmd("nnoremap gP <cmd>lua require('goto-preview').close_all_win()<CR>")
    }
  end
},
```

### [lsp-rooter](https://github.com/ahmedkhalf/lsp-rooter.nvim)

**cwd到项目的根目录**

```lua
{
  "ahmedkhalf/lsp-rooter.nvim",
  event = "BufRead",
  config = function()
    require("lsp-rooter").setup()
  end,
},
```

### [lsp_signature.nvim](https://github.com/ray-x/lsp_signature.nvim)

**当你输入时提示**

```lua
{
  "ray-x/lsp_signature.nvim",
  event = "BufRead",
  config = function() require"lsp_signature".on_attach() end,
},
```

### [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim)

**a tree like view for symbols**

```lua
{
  "simrat39/symbols-outline.nvim",
  config = function()
    require('symbols-outline').setup()
  end
},
```

### [trouble.nvim](https://github.com/folke/trouble.nvim)

**诊断、参考、telescope结果、快速修复和位置列表**

```lua
{
  "folke/trouble.nvim",
    cmd = "TroubleToggle",
},
```

同时在 `config.lua` 中定义键盘绑定

```lua
lvim.builtin.which_key.mappings["t"] = {
  name = "Diagnostics",
  t = { "<cmd>TroubleToggle<cr>", "trouble" },
  w = { "<cmd>TroubleToggle workspace_diagnostics<cr>", "workspace" },
  d = { "<cmd>TroubleToggle document_diagnostics<cr>", "document" },
  q = { "<cmd>TroubleToggle quickfix<cr>", "quickfix" },
  l = { "<cmd>TroubleToggle loclist<cr>", "loclist" },
  r = { "<cmd>TroubleToggle lsp_references<cr>", "references" },
},
```

## 一般

### [auto-save](https://github.com/Pocco81/auto-save.nvim)

**每当你对你的工作进行修改时，自动保存你的工作**

```lua
{
  "Pocco81/auto-save.nvim",
  config = function()
    require("auto-save").setup()
  end,
},
```

### [codi.vim](https://github.com/metakirby5/codi.vim)

**interactive scratchpad for hackers**

```lua
{
  "metakirby5/codi.vim",
  cmd = "Codi",
},
```

### [copilot.lua](https://github.com/zbirenbaum/copilot.lua) and [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp)

**你的人工智能配对程序员**

```lua
table.insert(lvim.plugins, {
  "zbirenbaum/copilot-cmp",
  event = "InsertEnter",
  dependencies = { "zbirenbaum/copilot.lua" },
  config = function()
    vim.defer_fn(function()
      require("copilot").setup() -- https://github.com/zbirenbaum/copilot.lua/blob/master/README.md#setup-and-configuration
      require("copilot_cmp").setup() -- https://github.com/zbirenbaum/copilot-cmp/blob/master/README.md#configuration
    end, 100)
  end,
})
```

Make sure to run `:Lazy load copilot-cmp` followed by `:Copilot auth` once the plugin is installed to start the authentication process.

### [dial.nvim](https://github.com/monaqa/dial.nvim)

**extended incrementing/decrementing**

```lua
{
  "monaqa/dial.nvim",
  event = "BufRead",
  config = function()
    local dial = require "dial"
    vim.cmd [[
    nmap <C-a> <Plug>(dial-increment)
      nmap <C-x> <Plug>(dial-decrement)
      vmap <C-a> <Plug>(dial-increment)
      vmap <C-x> <Plug>(dial-decrement)
      vmap g<C-a> <Plug>(dial-increment-additional)
      vmap g<C-x> <Plug>(dial-decrement-additional)
    ]]

    dial.augends["custom#boolean"] = dial.common.enum_cyclic {
      name = "boolean",
      strlist = { "true", "false" },
    }
    table.insert(dial.config.searchlist.normal, "custom#boolean")

    -- For Languages which prefer True/False, e.g. python.
    dial.augends["custom#Boolean"] = dial.common.enum_cyclic {
      name = "Boolean",
      strlist = { "True", "False" },
    }
    table.insert(dial.config.searchlist.normal, "custom#Boolean")
  end,
},

```

### [glow.nvim](https://github.com/npxbr/glow.nvim)

**在neovim中预览markdown**

```lua
-- You must install glow globally
-- https://github.com/charmbracelet/glow
-- yay -S glow
{
  "npxbr/glow.nvim",
  ft = {"markdown"}
  -- build = "yay -S glow"
},
```

### [markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)

**在浏览器中预览markdown**

```lua
{
  "iamcco/markdown-preview.nvim",
  build = "cd app && npm install",
  ft = "markdown",
  config = function()
    vim.g.mkdp_auto_start = 1
  end,
},
```

### [neoscroll](https://github.com/karb94/neoscroll.nvim)

**平滑滚动**

```lua
{
  "karb94/neoscroll.nvim",
  event = "WinScrolled",
  config = function()
  require('neoscroll').setup({
        -- All these keys will be mapped to their corresponding default scrolling animation
        mappings = {'<C-u>', '<C-d>', '<C-b>', '<C-f>',
        '<C-y>', '<C-e>', 'zt', 'zz', 'zb'},
        hide_cursor = true,          -- Hide cursor while scrolling
        stop_eof = true,             -- Stop at <EOF> when scrolling downwards
        use_local_scrolloff = false, -- Use the local scope of scrolloff instead of the global scope
        respect_scrolloff = false,   -- Stop scrolling when the cursor reaches the scrolloff margin of the file
        cursor_scrolls_alone = true, -- The cursor will keep on scrolling even if the window cannot scroll further
        easing_function = nil,        -- Default easing function
        pre_hook = nil,              -- Function to run before the scrolling animation starts
        post_hook = nil,              -- Function to run after the scrolling animation ends
        })
  end
},
```

### [neuron](https://github.com/oberblastmeister/neuron.nvim)

**next generation note-taking**

```lua
 {"oberblastmeister/neuron.nvim"},
```

### [nvim-lastplace](https://github.com/ethanholz/nvim-lastplace)

**pick up where you left off**

```lua
 {
  "ethanholz/nvim-lastplace",
  event = "BufRead",
  config = function()
   require("nvim-lastplace").setup({
    lastplace_ignore_buftype = { "quickfix", "nofile", "help" },
    lastplace_ignore_filetype = {
     "gitcommit", "gitrebase", "svn", "hgcommit",
    },
    lastplace_open_folds = true,
   })
  end,
 },
```

### [persistence](https://github.com/folke/persistence.nvim)

**简单的会话管理**

```lua
{
  "folke/persistence.nvim",
    event = "BufReadPre", -- this will only start session saving when an actual file was opened
    module = "persistence",
    config = function()
      require("persistence").setup {
        dir = vim.fn.expand(vim.fn.stdpath "config" .. "/session/"),
        options = { "buffers", "curdir", "tabpages", "winsize" },
      }
  end,
},
```

同时在您的 `config.lua` 中定义按键绑定

```lua
  lvim.builtin.which_key.mappings["S"]= {
    name = "Session",
    c = { "<cmd>lua require('persistence').load()<cr>", "Restore last session for current dir" },
    l = { "<cmd>lua require('persistence').load({ last = true })<cr>", "Restore last session" },
    Q = { "<cmd>lua require('persistence').stop()<cr>", "Quit without saving session" },
  }
```

### [todo-comments.nvim](https://github.com/folke/todo-comments.nvim)

**搜索并高亮todo注释**

```lua
{
  "folke/todo-comments.nvim",
  event = "BufRead",
  config = function()
    require("todo-comments").setup()
  end,
},
```

### [vim-cursorword](https://github.com/itchyny/vim-cursorword)

**underlines the word under the cursor**

```lua
{
  "itchyny/vim-cursorword",
    event = {"BufEnter", "BufNewFile"},
    config = function()
      vim.api.nvim_command("augroup user_plugin_cursorword")
      vim.api.nvim_command("autocmd!")
      vim.api.nvim_command("autocmd FileType NvimTree,lspsagafinder,dashboard,vista let b:cursorword = 0")
      vim.api.nvim_command("autocmd WinEnter * if &diff || &pvw | let b:cursorword = 0 | endif")
      vim.api.nvim_command("autocmd InsertEnter * let b:cursorword = 0")
      vim.api.nvim_command("autocmd InsertLeave * let b:cursorword = 1")
      vim.api.nvim_command("augroup END")
      end
},
```

### [vim-repeat](https://github.com/tpope/vim-repeat)

**enable repeating supported plugin maps with "."**

```lua
{ "tpope/vim-repeat" },
```

### [vim-sanegx](https://github.com/felipec/vim-sanegx)

**open url with `gx`**

```lua
{
  "felipec/vim-sanegx",
  event = "BufRead",
},
```

### [vim-surround](https://github.com/tpope/vim-surround)

**mappings to delete, change and add surroundings**

```lua
{
  "tpope/vim-surround",

  -- make sure to change the value of `timeoutlen` if it's not triggering correctly, see https://github.com/tpope/vim-surround/issues/117
  -- setup = function()
    --  vim.o.timeoutlen = 500
  -- end
},
```

### [vim-wakatime](https://github.com/wakatime/vim-wakatime)

**从你的编程活动中自动生成指标、洞察力和时间跟踪**

```lua
{
  "wakatime/vim-wakatime"
}
```

安装并同步后，通过 `:WakaTimeApiKey` 命令添加你的WakaTime API密钥

## 特定语言

### [bracey](https://github.com/turbio/bracey.vim)

**实时编辑html、css和javascript**

```lua
{
  "turbio/bracey.vim",
  cmd = {"Bracey", "BracyStop", "BraceyReload", "BraceyEval"},
  build = "npm install --prefix server",
},
```

### [vim-bundler](https://github.com/tpope/vim-bundler)

**lightweight support for ruby's bundler**

```lua
{
  "tpope/vim-bundler",
  cmd = {"Bundler", "Bopen", "Bsplit", "Btabedit"}
},
```

### [vim-rails](https://github.com/tpope/vim-rails)

**edit ruby on rails applications**

```lua
{
  "tpope/vim-rails",
  cmd = {
    "Eview",
    "Econtroller",
    "Emodel",
    "Smodel",
    "Sview",
    "Scontroller",
    "Vmodel",
    "Vview",
    "Vcontroller",
    "Tmodel",
    "Tview",
    "Tcontroller",
    "Rails",
    "Generate",
    "Runner",
    "Extract"
  }
},

```
