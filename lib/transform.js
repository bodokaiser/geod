const DEFAULT_ITERS = 5

function Transform(width, height) {
  this._iters = DEFAULT_ITERS

  this._width = width
  this._height = heigth
}

Transform.prototype.iters = function(iters) {
  this._iters = iters
}

Transform.prototype.weight = function(weigth) {
  
}

Transform.prototype.distance = function(distance) {

}

Transform.prototype.transform = function() {

}

module.exports = Transform