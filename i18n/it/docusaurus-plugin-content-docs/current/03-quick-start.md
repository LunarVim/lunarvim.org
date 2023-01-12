# Quick start

Dopo l'installazione dovresti essere in grado di avviare LunarVim con il comando `lvim`.

## Aggiungere `lvim` a `$PATH`

If your terminal can't find the `lvim` command, [add the installation folder to your path](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7) or move the lvim command to somewhere in your path. The default install folder is `~/.local/bin`.
Se il tuo terminale non riesce a trovare il comando `lvim`, [aggiungi la cartella di installazione al tuo percorso](https://gist.github.com/nex3/c395b2f8fd4b02068be37c961301caa7) o sposta il comando lvim da qualche parte nel tuo percorso. La cartella di installazione predefinita è `~/.local/bin`.

## Tree-sitter

Per installare il supporto per la colorazione sintattica e treesitter per il tuo linguaggio:

```vim
:TSInstall <TAB>
```

**NOTA:** `<TAB>` indica che dovresti premere il tasto `<TAB>` e scorrere tra le opzioni

Non tutti i linguaggi sono supportati. Per una lista di linguaggi supportati [vedi qui](https://github.com/nvim-treesitter/nvim-treesitter#supported-languages)

## Language Server

Per installare un Language Server per il tuo linguaggio:

```vim
:LspInstall <TAB>
```

A volte il language server per il tuo linguaggio non avrà un nome ovvio. Per esempio, il language server per ruby è solargraph. Metals è il language server per scala, ecc. Per trovare il language server corrispondente per ilo tuo linguaggio [vedi qui](https://github.com/williamboman/nvim-lsp-installer)

## Formattazione e Linting

Formattazione e linting non sono supportati da alcuni LSP.
Dovranno essere installati / configurati separatamente.

Vedi in [linguaggi](./languages/README.md) dove può essere gesito ogni linguaggio con il proprio formattatore e linting.

## Nerd Fonts

È consigliato un [nerd font](https://www.nerdfonts.com/). Altrimenti alcuni simboli non verranno mostrati correttamente. Per ulteriori informazioni visita la [sezione di configurazione](./configuration/04-nerd-fonts.md).

## Passaggi successivi

- Impara come [configurare LunarVim](./configuration/README.md)
- Informati su i [plugin installati](./plugins/README.md)
- Impara come configurare LunarVim per il tuo [linguaggio](./languages/README.md)
