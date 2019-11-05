const path = require('path')

module.exports = {
  files: path.resolve('./svg/**/*.svg'),
  dest: path.resolve('./fonts'),
  html: true,
  startCodepoint: 0xe600
}
