# Java

## Install Syntax Highlighting

```vim
:TSInstall java
```

## Supported language servers

```lua
java = { "jdtls" }
```

:::note

The latest jdtls requires **jdk-17 or newer** to run.

For older versions you have to pin `jdtls@v1.12.0` and `nvim-jdtls@3a148dac526396678f141a033270961d0d9ccb88`!

```
# or in the config.lua

require("mason-lspconfig").setup({
  ensure_installed = {
    "jdtls@v1.12.0"
  }
})

lvim.plugins = {
  { "mfussenegger/nvim-jdtls", commit = "3a148dac526396678f141a033270961d0d9ccb88" },
}
```

:::

## Supported formatters

```lua
java = { "clang-format", "uncrustify" }
```
