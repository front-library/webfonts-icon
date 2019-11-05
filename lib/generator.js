const webfontsGenerator = require('@vusion/webfonts-generator')
const deepmerge = require('deepmerge')
const glob = require('glob')
const path = require('path')
const rimraf = require('rimraf')
const config = require('../config')

module.exports = async(options = {}) => {
  let files = typeof options.files === 'string' ? await new Promise((resolve, reject) => glob(
    path.resolve(options.files), (error, files) => error ? reject(error) : resolve(files)
  )) : options.files

  let mergeConfig

  // delete options attribute "files"
  mergeConfig = deepmerge(config, { ...options, ...{ files } }, {
    arrayMerge: (destinationArray, sourceArray) => sourceArray
  })

  mergeConfig = {
    ...mergeConfig,
    ...{
      dest: path.resolve(mergeConfig.dest)
    }
  }

  await new Promise((resolve, reject) => rimraf(
    mergeConfig.dest, error => error ? reject(error) : resolve(true)
  ))

  return await new Promise((resolve, reject) => webfontsGenerator(
    mergeConfig, error => error ? reject(error) : resolve(mergeConfig)
  ))
}
