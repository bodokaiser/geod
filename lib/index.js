var Transform = require('./transform')

module.exports = function(width, height) {
  return new Transform(width, height)
}