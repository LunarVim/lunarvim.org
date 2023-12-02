---
sidebar_position: 2
---

# Plugins overview

LunarVim supports a wide range of plugins to enhance the functionality of the Neovim text editor. This guide will introduce you to the basic core plugins that are part of LunarVim.

## Core plugins

LunarVim also includes a set of [core plugins](../../features/core-plugins-list) that are pre-configured and provided out of the box. These plugins offer essential features and functionality.

These plugins are just a starting point, and there are many more available to explore. Remember to read the documentation and experiment with different plugins to find the ones that suit your workflow and preferences.

## Core plugin details

### Neovim LSP Configuration

The `nvim-lspconfig` plugin provides easy configuration for the built-in Language Server Protocol (LSP) client in Neovim. It simplifies the setup process for various language servers, enabling features like code completion, linting, and more.

### nvim-treesitter

`nvim-treesitter` brings advanced syntax highlighting and parsing capabilities to Neovim. It improves code highlighting accuracy, enables better indentation, and allows for various language-specific features.

### Telescope

`Telescope` is a highly extensible fuzzy finder plugin. It provides a powerful interface for searching files, buffers, and other resources within your Neovim environment. With its intuitive navigation and customizable options, it simplifies the process of finding and opening files.

### NvimTree

`NvimTree`, a widely embraced Neovim plugin, enriches the coding experience by seamlessly integrating a file explorer sidebar within the interface. This feature optimizes workflow efficiency and seamless file management. NvimTree offers an array of customization options, ensuring alignment with users' preferences. Employing common shortcuts like `o` to open files and `d` to toggle folders, NvimTree significantly streamlines the programming journey.

### Auto Pairs

`Auto Pairs` automatically inserts matching pairs of brackets, quotes, and other characters as you type. It saves time and reduces the chances of mismatched pairs. This plugin greatly enhances the editing experience and helps prevent syntax errors.

### Comment.nvim

`Comment.nvim` simplifies the process of commenting and uncommenting code blocks. It supports various programming languages and provides keybindings for quickly toggling comments. This plugin makes it easy to annotate your code and improve readability.

### Gitsigns

If you're using Git for version control, `Gitsigns` is a valuable plugin. It displays Git diff markers and signs within the gutter, indicating added, modified, or deleted lines. This helps you visualize changes and track the status of your files directly in Neovim.

### Lualine

`Lualine` is a customizable statusline plugin for Neovim. It allows you to display various information, such as the current mode, file path, and Git branch, in your statusline. With its simple configuration, you can personalize the appearance and contents of your statusline.

### Which-key

`Which-key` provides a popup that shows keybindings and their associated commands. It helps you discover and remember available keybindings within Neovim. This plugin is particularly useful for beginners who want to explore and learn the various functionalities offered by Neovim and its plugins.

## Installing and configuring plugins

Plugins in LunarVim are managed using [folke/lazy.nvim](https://github.com/folke/lazy.nvim). To install plugins, you need to add entries to the `lvim.plugins` table in your `config.lua`. About configuring your plugins you can read a lot more at [this page](../../configuration/plugins).
