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

The `sourcekit` language server is disabled (overridden) by default because of the conflict with `clangd`

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
