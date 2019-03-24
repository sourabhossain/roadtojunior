# My Visual Studio Code Setup

This file includes all of [VS Code] extension and `setting.json`

## List of Extension I have installed

- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [:emojisense:](https://marketplace.visualstudio.com/items?itemName=bierner.emojisense)
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [GitHub Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
- [HTMLHint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Paste and Indent](https://marketplace.visualstudio.com/items?itemName=Rubymaniac.vscode-paste-and-indent)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [Sass](https://marketplace.visualstudio.com/items?itemName=robinbentley.sass-indented)
- [SQL Server (mssql)](https://marketplace.visualstudio.com/items?itemName=ms-mssql.mssql)
- [VS Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)


## `Setting.json` file

```javascript
{
  "editor.minimap.enabled": true,
  "workbench.statusBar.visible": true,
  "workbench.activityBar.visible": true,
  "workbench.iconTheme": "material-icon-theme",
  "breadcrumbs.enabled": true,
  "editor.formatOnPaste": true,

  // Prettier
  "prettier.requireConfig": true,
  "prettier.singleQuote": true,
  "prettier.eslintIntegration": true,
  "prettier.tabWidth": 2,
  "editor.formatOnSave": true,

  // Enable per-language
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.tabSize": 2
  },
  "[html]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 4
  },
  "[python]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 4
  },

  // Color
  "workbench.colorCustomizations": {
    "statusBar.background": "#333333",
    "statusBar.noFolderBackground": "#333333",
    "statusBar.debuggingBackground": "#263238"
  },
  // Fira Code
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 100,
  "editor.fontSize": 16,
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "css.validate": false,
  "scss.validate": false,
  "less.validate": false,
  "editor.wordWrap": "on",

  // Terminal
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",

  // Git Bash on Windows
  "terminal.integrated.shell.windows": "C:\\Program Files\\Git\\bin\\bash.exe",
  "window.zoomLevel": 0,

  // ESLint
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true,
  "eslint.provideLintTask": true,

  // Pylint
  "python.linting.enabled": true,
  "python.unitTest.unittestArgs": [
    "-v",
    "-s",
    "./src",
    "-p",
    "*_test.py"
  ],
  "python.unitTest.pyTestEnabled": false,
  "python.unitTest.nosetestsEnabled": false,
  "python.unitTest.unittestEnabled": true,

  // Theme
  "workbench.colorTheme": "Oceanic Next",
  "terminal.integrated.rendererType": "dom",
  "liveServer.settings.donotVerifyTags": true,
  "javascript.updateImportsOnFileMove.enabled": "always",

  // emmet
  "emmet.triggerExpansionOnTab": true,
  "emmet.showSuggestionsAsSnippets": true,
  "emmet.includeLanguages": {
    "html": "html",
    "erb": "erb",
    "javascript": "javascriptreact",
    "vue": "html",
    "ejs": "html"
  },
  "emmet.preferences": {
    "css.webkitProperties": "border-right,animation",
    "css.mozProperties": "",
    "css.oProperties": null,
    "css.msProperties": null,
    "filter.commentAfter": "\n<!-- /[#ID][.CLASS] -->"
  }
}
```