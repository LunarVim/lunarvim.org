# 配置

您可以使用配置文件`~/.config/lvim/config.lua`来配置LunarVim。

如希望快速开始使用LunarVim，请复制示例配置文件。

```bash
cp ~/.local/share/lunarvim/lvim/utils/installer/config.example.lua ~/.config/lvim/config.lua
```

许多LunarVim内部设置都由`lvim`全局对象显露。
如需查看所有可用设置，请在`~/.config/lvim/`或`~/.local/share/lunarvim/lvim`运行以下命令以生成`lv-settings.lua`文件。

```bash
lvim --headless +'lua require("lvim.utils").generate_settings()' +qa && sort -o lv-settings.lua{,}
```

下面是输出的示例。

```lua
lvim.builtin.telescope.defaults.initial_mode = "insert"
lvim.builtin.telescope.defaults.layout_config.horizontal.mirror = false
lvim.builtin.telescope.defaults.layout_config.preview_cutoff = 120
lvim.builtin.telescope.defaults.layout_config.prompt_position = "bottom"
lvim.builtin.telescope.defaults.layout_config.vertical.mirror = false
lvim.builtin.telescope.defaults.layout_config.width = 0.75
lvim.builtin.telescope.defaults.layout_strategy = "horizontal"
```

如果您想继续使用`nvim`命令启动LunarVim，请在shell的配置文件中设置别名：`alias nvim=lvim`。要临时恢复为默认的nvim，请在其前面加上反斜杠`\nvim`。如果创建此别名，可能还需要显式设置编辑器`export EDITOR='lvim'`。这将告诉git等命令行工具使用LunarVim作为编辑器。