# Installazione

## Prerequisiti

- Assicurati di aver installato l'ultima versione di [`Neovim v0.7.2+`](https://github.com/neovim/neovim/releases/latest).
- Assicurati di aver installato `git`, `make`, `pip`, `npm`, `node` e `cargo` nel tuo sistema.
- [Risolvi i permessi `EACCES` quando installi i pachetti globalmente](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) per evitare errori quando installi pachetti con npm.

# Installare

Ci sono diversi modi per installare LunarVim.

## Stabile

Nessun allarme o sorpresa:

```bash
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/install.sh)
```

## Rolling

Tutte le nuove funzionalità con tutti i nuovi bug:

```bash
LV_BRANCH=rolling bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/rolling/utils/installer/install.sh)
```

Puoi anche usare questo helper script per ottenere l'ultimo binario di neovim:

```bash
bash <(curl -s https://raw.githubusercontent.com/LunarVim/LunarVim/rolling/utils/installer/install-neovim-from-release)
```

Assicurati di controllare la sezione di [risoluzione degli errori](./troubleshooting/README.md) se riscontri dei problemi.

## Suggerimenti per gli utenti di WSL2

Quando usi LunarVim dentro WSL2, ci sono alcune cose di cui dovresti essere a conoscenza:

1. Evita di usare LunarVim dentro la cartella di Windows, es. `/mnt/c`, a causa di problemi di prestazioni del filesystem, vedi [WSL#4197](https://github.com/microsoft/WSL/issues/4197).
2. Alcuni utenti di WSL2 hanno riscontrato che ottenere gli appunti potrebbe essere lento. Una soluzione temporanea è chiamare il gestore degli appunti dal lato di Windows. Neovim cerca di usare [win32yank.exe](https://github.com/equalsraf/win32yank) se è disponibile. Dunque installalo e imposta il valore di `clipboard` esplicitamente:

```lua
if vim.fn.has "wsl" == 1 then
  vim.g.clipboard = {
    copy = {
      ["+"] = "win32yank.exe -i --crlf", 
      ["*"] = "win32yank.exe -i --crlf",
    },
    paste = {
      ["+"] = "win32yank.exe -o --lf",
      ["*"] = "win32yank.exe -o --lf",
    },
  }
end

```

3. Alcuni utenti di WSL2 riscontrano che aprire i buffer all'avvio necessita di molto tempo.
Una possibile soluzione è aggiungere quanto segue al tuo file `/etc/wsl.conf`:

```ini
[automount]
# Impostare questo a vero monterà automaticamente i dischi fissi (C:/ o D:/) con DrvFs sotto la cartella radice impostata sotto. Impostarlo a falso significa che i dischi non saranno montati automaticamente, ma dovranno essere montati a mano o con fstab.
enabled = false

# Imposta il file `/etc/fstab` per essere processato quando una distribuzione WSL viene lanciata.
mountFsTab = false

# Imposta se WSL supporta processi interoperativi come lanciare app Windows e aggiungere variabili di percorso. Impostare questi valori a falos bloccherà il lancio di processi Windows e bloccherà l'aggiunta delle variabili di ambiente $PATH.
[interop]
enabled = false
appendWindowsPath = false
```

Riferimento: [WSL automount settings](https://docs.microsoft.com/en-us/windows/wsl/wsl-config#automount-settings)

## Suggerimenti per gli utenti di Neovide

Per usare LunarVim con [Neovide](https://github.com/neovide/neovide) devi aggiungere la riga seguente al tuo file `config.lua`:

```lua
vim.o.guifont = "Nome del tuo font"
```

Dove `Nome del tuo font` è il nome letterale del font che vuoi usare. Per esempio `"Inconsolata Nerd Font"`.
Avrai anche bisogno di esportare le variabili d'ambiente corrette e chiamare neovide con i parametri corretti. Un modo semplice per ottenere ciò e creare un piccolo script eseguibile, come per esempio `~/.local/bin/lvim-gui`

```bash
#!/bin/sh
# ~/.local/bin/lvim-gui
export LUNARVIM_RUNTIME_DIR="${LUNARVIM_RUNTIME_DIR:-"$HOME/.local/share/lunarvim"}"
export LUNARVIM_CONFIG_DIR="${LUNARVIM_CONFIG_DIR:-"$HOME/.config/lvim"}"
export LUNARVIM_CACHE_DIR="${LUNARVIM_CACHE_DIR:-"$HOME/.cache/lvim"}"

exec neovide -- -u "$LUNARVIM_RUNTIME_DIR/lvim/init.lua" "$@"
```

Poi forniscigli i permessi di esecuzione appropriati

```bash
chmod +x ~/.local/bin/lvim-gui
```

E d'ora in poi potrai lanciare in questo modo:

```bash
lvim-gui
# o con parametri
lvim-gui some-file
```

## Disinstallazione

Puoi rimuovere LunarVim (inclusi i file di configurazione) usando lo script `uninstall` incluso

```bash
bash ~/.local/share/lunarvim/lvim/utils/installer/uninstall.sh
# oppure
bash <(curl -s https://raw.githubusercontent.com/lunarvim/lunarvim/master/utils/installer/uninstall.sh)
```



