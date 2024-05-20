---
sidebar_position: 2
---

# 安装后

## 将 `lvim` 添加到 `$PATH`

如果终端找不到 `lvim` 命令，[将安装目录添加到环境变量](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7) 或者将lvim命令移动到已经在环境变量中的路径。默认的安装文件夹是 `~/.local/bin`。

## 安装 [Nerd Font](https://www.nerdfonts.com/) 字体

LunarVim 使用 Nerd Fonts 字体中的图标。如果你不想使用它们，将 `lvim.use_icons` 设置为`false`。

### 简易安装

请参考 [ronniedroid/getnf](https://github.com/ronniedroid/getnf) 简易安装nerd fonts字体。

### 视频教程

<iframe width="560" height="315" src="https://www.youtube.com/embed/fR4ThXzhQYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

### 手动安装

1. 访问 [pached fonts directory](https://www.nerdfonts.com/font-downloads)
1. 下载字体文件到 `~/.local/share/fonts`

### 使用 Curl 下载

```bash
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLo "Droid Sans Mono for Powerline Nerd Font Complete.otf" https://github.com/ryanoasis/nerd-fonts/raw/master/patched-fonts/DroidSansMono/complete/Droid%20Sans%20Mono%20Nerd%20Font%20Complete.otf
```

### 终端设置

安装字体后，必须执行`fc-cache -f -v`以刷新字体缓存。然后需要改终端设置以使用刚刚安装的字体。有关更改终端字体的信息，请参阅终端文档。