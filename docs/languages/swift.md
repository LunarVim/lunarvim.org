# Swift

## Install Syntax Highlighting
```vim
:TSInstall swift
```

## Install Language Server

```vim
:LspInstall sourcekit
```


## Configure Lunarvim

The Lsp, and formatting does not work out of the box. To fix this, do the following:

### Lsp Configuration
Create a file called `~/.config/lvim/ftplugin/swift.lua`:

```lua
local opts = {}
require("lvim.lsp.manager").setup("sourcekit", opts)
```
## Supported formatters

```lua
swift = { "swiftformat" }
```
