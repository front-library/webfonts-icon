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
webfonts-icon -f[--files] -d[--dest] -c[--config] -e[--ext]
```

|param|type|explain|
|-----|----|-------|
|files|string|Icons catalog name, default: <code>./svg/**/*.svg</code>|
|dest|string|Directory name of output, default: <code>./fonts</code> |
|config|object| default: <code>iconfont.config.js</code>, return "object"|
|ext|string| Style file ext\'name, default: <code>.css</code>, |


## API

Retrun Promise type.

```
const webfontsIcon = reqiure('webfonts-icon')

webfontsIcon([config]).then(config => {})

or:

const compile = async () => { await webfontsIcon([config]) }
```
## Config reference

config item: <br><br>
Extended:

|param|type|explain|
|-----|----|-------|
|files|string/pattern/array|glob type path value|
|startCodepoint|number|default: 0xe600|
|extName|string|Style file ext's name, default: .css|
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
