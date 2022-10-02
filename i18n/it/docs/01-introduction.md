---
title: Introduzione
---

<img src="/img/lunarvim_logo.png" alt="Logo di LunarVim" />

# Introduction

LunarVim è un IDE layer opinionato, estendibile e veloce per Neovim >= 0.7.0. LunarVim trae vantaggio dalle ultimissime funzionalità di Neovim come [Treesitter](https://tree-sitter.github.io/tree-sitter/) e il supporto per il [Language Server Protocol](https://en.wikipedia.org/wiki/Language_Server_Protocol).


## Opinionato

LunarVim viene fornito con una configurazione predefinita sensata che ti permette di costruirci sopra. Le funzionalità includono auto completamento, terminale integrato, esploratore di file, fuzzy finder, LSP, linting, formattazione e debugging.

## Estendibile

Solo perché LunarVim ha un'opinione non vuol dire che devi condividerla. Ogni componente aggiuntivo incorporato può essere acceso o spento nel file `config.lua`. Questo è il punto dove potrai aggiungere i tuoi componenti aggiuntivi, definire le scorciatoie da tastiera, autocomandi, associazioni con il tasto leader e tutte le altre impostazioni personalizzate.

## Veloce

LunarVim carica pigramente i componenti aggiuntivi dove possibile per massimizzare la velocità. I componenti aggiuntivi disattivati inoltre non diminuiranno la velocità visto che la lista dei componenti aggiuntivi viene compilata solo con quelli attivi. Questa strategia permette a LunarVim di non dover scegliere tra funzionalità e velocità.
