# Installing

There are a few ways to install LunarVim

## Stable

No alarms and no surprises:

```bash

```

## Rolling

All the new features with all the new bugs:

```bash

```

## Manually

There is also an option to install by cloning the repo directly:

```bash

```

## If the install goes wrong

Here are a few ways to repair your install if something goes wrong:

```bash

```

## I already have a config

### Rolling

If you already have a `nvim` directory under `~/.config` don't worry LunarVim will not overwrite it, if you're using the `rolling` branch. As LunarVim will create it's own directory called `lvim` which is located under `~/.config` as well.

### Stable

If you use the `stable` branch, LunarVim still currently uses the `nvim` directory to store it's config. You will need to move your current config e.g.

```bash
mv ~/.config/nvim ~/.config/nvim.bak
```
