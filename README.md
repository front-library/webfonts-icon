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

## Npm scripts

Using <code>package.json</code>: <br><br>

```
{
  "scripts": {
    ...,
    "fonticon": "webfonts-icon -f ./svg/**/*.svg -d ./fonts -e .scss"
  }
}
```

| param  | type   | explain                                                   |
| ------ | ------ | --------------------------------------------------------- |
| files  | string | Icons catalog name, example: <code>./svg/\*_/_.svg</code> |
| dest   | string | Directory name of output                                  |
| config | object | default: <code>webfonts.config.js</code>, return "object" |
| ext    | string | Style file ext\'name                                      |

## API

The way used in script files, Return Promise class.<br>
Specific reference to the following script examples:

```
const webfontsIcon = reqiure('webfonts-icon')

webfontsIcon(options).then(data => {})

or:

const compile = async options => { await webfontsIcon(options) }
```

## Config reference

config item: <br><br>
Extended:

| param          | type                 | explain                                                     |
| -------------- | -------------------- | ----------------------------------------------------------- |
| files          | string/pattern/array | glob type path value, default: <code>./svg/\*_/_.svg</code> |
| dest           | string               | Directory name of output, default: <code>./fonts</code>     |
| startCodepoint | number               | default: 0xe600                                             |
| extName        | string               | Style file ext's name, default: .css                        |
| tips           | boolen               | Tips output success message. default: false                 |

[@vusion/webfonts-generator](https://www.npmjs.com/package/@vusion/webfonts-generator)
