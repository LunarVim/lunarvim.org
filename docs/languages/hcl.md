# HCL

## Syntax highlighting


First, within LunarVim run the following:

```vim
:TSInstall hcl
```

If you want it to be active for `.tf` files as well, just add this to your `config.lua`:
```lua
parser_configs.hcl = {
  filetype = "hcl", "terraform",
}
```
## Supported language servers

```lua
terraform = { "terraform", "terraformls"},
```

## Supported formatters

```lua
terraform = { "terraform"} }
```
