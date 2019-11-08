const webfontsGenerator = require('@vusion/webfonts-generator')
const deepmerge = require('deepmerge')
const glob = require('glob')
const path = require('path')
const rimraf = require('rimraf')
const config = require('../config')
const chalk = require('chalk')

module.exports = async(options = {}) => {
  let clone = {
    files: options.files,
    extName: options.extName || '.css',
    tips: options.tips,
    dest: options.dest
  }
  let files = typeof clone.files === 'string' ? await new Promise((resolve, reject) => glob(
    path.resolve(clone.files), (error, files) => error ? reject(error) : resolve(files)
  )) : clone.files

  let mergeConfig
  let { extName } = clone
  let font

  // delete options attribute "files"
  mergeConfig = deepmerge(config, { ...clone, ...{ files } }, {
    arrayMerge: (destinationArray, sourceArray) => sourceArray
  })

  mergeConfig = {
    cssDest: path.join(mergeConfig.dest, `${mergeConfig.fontName || 'iconfont'}${extName}`),
    ...mergeConfig
  }

  await new Promise((resolve, reject) => rimraf(
    mergeConfig.dest, error => error ? reject(error) : resolve(true)
  ))

  font = await new Promise((resolve, reject) => webfontsGenerator(
    mergeConfig, error => error ? reject(error) : resolve(mergeConfig)
  ))

  if (clone.tips) {
    console.log(chalk.blue(`Iconfont compile success, output: ${mergeConfig.dest}`))
  }
  return font
}
