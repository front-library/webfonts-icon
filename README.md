# Explain

Icon font generator, Can use icons to fit into the project. 

# Install

```
npm i webfonts-icon -D
```

# Usage

## Commander

Using the command line to generate font icons

```
webfonts-icon -f[--files] -d[--dest] -c[--config]
```

|param|type|explain|
|-----|----|-------|
|files|string|Icons catalog name |
|dest|string|Directory name of output, default: <code>./fonts</code> |
|config|object| default: <code>iconfont.config.js</code>, return "object"|

```
files default: ./svg/**/*.svg
```

## API

Retrun Promise type.

```
const iconfont = reqiure('webfonts-icon')

iconfont([config]).then(config => {})

or:

const compile = async () => { await iconfont([config]) }
```
## Reference

config item: <br><br>
Extended files attribute： string | array <br><br>
[@vusion/webfonts-generator](https://www.npmjs.com/package/@vusion/webfonts-generator)

## Scripts

Using <code>package.json</code>: <br><br>
```
{
  "scripts": {
    ...,
    "fonticon": "webfonts-icon -f ./svg/**/*.svg -d ./fonts"
  }
}
```
