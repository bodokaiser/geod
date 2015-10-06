const DEFAULT_ITERS = 1

function Transform(width, height) {
  this._iters = DEFAULT_ITERS

  this._width = width
  this._height = height
  this._length = width * height
}

Transform.prototype.iters = function(iters) {
  this._iters = iters

  return this
}

Transform.prototype.weight = function(weight) {
  this._weight = weight || new Uint8Array(this._length)
  if (this._weight.length !== this._length) {
    throw new Error('weight length missmatch')
  }

  return this
}

Transform.prototype.distance = function(distance) {
  if (!distance) throw new Error('distance required')
  if (distance.length !== this._length) {
    throw new Error('distance length missmatch')
  }
  if (distance.reduce((p, c) => p === c ? c : null) !== null) {
    throw new Error('distance missing unique values')
  }
  this._distance = distance

  return this
}

Transform.prototype.transform = function() {
  var dist = this._distance || this.distance()._distance
  var weigh = this._weight || this.weight()._weight

  var w = this._width - 1
  var h = this._height - 1

  for (var n = 0; n < this._iters; n++) {
    for (var j = 0; j < this._height; j++) {
      for (var i = 0; i < this._width; i++) {
        var k = [kernel(i, j), kernel(h-i, w-j, 1)].map(k => k.filter(outside))

        dist[index(i, j)] = nearest(k[0], i, j)
        dist[index(h-i, w-j)] = nearest(k[1], h-i, w-j)
      }
    }
  }

  function index(x, y) {
    return x + (w+1) * y
  }

  function outside(l) {
    return !(l[0] < 0 || l[1] < 0 || l[0] > w || l[1] > h)
  }

  function nearest(k, x, y) {
    var i = index(x, y)

    return k
      .map(k => index(k[0], k[1]))
      .map(l => 1 + Math.abs(weigh[i] - weigh[l]) + dist[l])
      .concat(dist[i])
      .reduce((p, c) => p > c ? c : p)
  }

  return this
}

module.exports = Transform

function kernel(x, y, n) {
  m = (n && -1) || 1

  return [[x-m, y-m], [x+m, y-m], [x, y-m], [x-m, y]]
}