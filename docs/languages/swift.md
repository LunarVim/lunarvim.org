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
local opts = {
  root_dir = function(fname)
    local util = require "lspconfig.util"
    local root_files = { "Package.swift" }

    return util.root_pattern(unpack(root_files))(fname) or util.root_pattern ".git"(fname) or util.path.dirname(fname)
  end,
  settings = {
    sourcekit = {},
    swift = {
      analysis = {},
    },
  },
  single_file_support = true,
  on_attach = require("lvim.lsp").common_on_attach,
  on_init = require("lvim.lsp").common_on_init,
  capabilities = require("lvim.lsp").common_capabilities(),
}

local servers = require "nvim-lsp-installer.servers"
local server_available, requested_server = servers.get_server "sourcekit"
if server_available then
  opts.cmd_env = requested_server:get_default_options().cmd_env
end

require("lvim.lsp.manager").setup("sourcekit", opts)
```
## Supported formatters

```lua
swift = { "swiftformat" }
```
