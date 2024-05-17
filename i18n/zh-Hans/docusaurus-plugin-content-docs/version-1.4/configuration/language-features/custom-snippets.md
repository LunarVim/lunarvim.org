---
sidebar_position: 3
---

# 自定义代码模版

## 简介

您可以将自己的代码模版添加到LunarVim。

自定义代码模版可以被定义为json或lua。

### json版本

首先在`config.lua`目录创建一个文件夹：`~/.config/lvim/snippets/`。

这里至少需要2个文件。

描述代码模版的第一个文件：

`package.json` :

```json
{
  "name": "nvim-snippets",
  "author": "authorname",
  "engines": {
    "vscode": "^1.11.0"
  },
  "contributes": {
    "snippets": [
      {
        "language": "python",
        "path": "./python.json"
      }
    ]
  }
}
```

对于每种语言，创建一个这样的文件：

`python.json` :

```json
{
  "hello": {
    "prefix": "hello",
    "body": ["print('Hello, World!')"],
    "description": "print Hello, World!"
  }
}
```

以上配置将`hellp`展开为`print("Hello, World!")`。

### lua版本

首先在`config.lua`目录创建一个名为`luasnippets`的文件夹：`~/.config/lvim/snippets/`

然后在该文件夹中，创建一个lua文件，以你想创建代码模版的语言命名。例如，为了创建lua的代码模版，创建一个名为`lua.lua`的（多余但正确的）文件。然后把你的文件放进去，例如：

```lua
return {
	s("foo", { t("Expands to bar") }),
}
```

LuaSnip能够在你保存时热加载在lua中定义的代码模版，但你可能需要在第一次创建代码模版文件时重新启动LunarVim。

请注意，LuaSnip在加载代码模版时，会注入一些实用的globals（在这个例子中是`s`和`t`函数），所以你不需要关心引入或定义它们。要获得更详细的信息和例子，请阅读[LuaSnip docs about this topic](https://github.com/L3MON4D3/LuaSnip/blob/master/DOC.md#lua)。

### TODO: snipmate version
