---
sidebar_position: 2
---

# Post install

## Add `lvim` to `$PATH`

If your terminal can't find the `lvim` command, [add the installation folder to your path](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7) or move the lvim command to somewhere in your path. The default install folder is `~/.local/bin`.

## Install a [Nerd Font](https://www.nerdfonts.com/)

LunarVim uses icons from Nerd Fonts. If you don't want to use them set `lvim.use_icons` to false.

### Easy Installer

Visit [getnf/getnf](https://github.com/getnf/getnf) for an easy way to install nerd fonts.

### Video Explanation

<iframe width="560" height="315" src="https://www.youtube.com/embed/fR4ThXzhQYI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1"></iframe>

### Manual Install

1. Go to the [patched fonts directory](https://www.nerdfonts.com/font-downloads)
1. Copy the downloaded files to `~/.local/share/fonts`

### Curl Download

```bash
mkdir -p ~/.local/share/fonts
cd ~/.local/share/fonts && curl -fLO https://github.com/ryanoasis/nerd-fonts/raw/HEAD/patched-fonts/DroidSansMono/DroidSansMNerdFont-Regular.otf
```

### Terminal settings

After installing your font, you will have to refresh your font cache by doing `fc-cache -f -v`. Then you will have to change your terminal settings to use the font you just installed. Please refer to your terminal's documentation for changing the terminal font.
