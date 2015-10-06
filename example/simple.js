var geodes = require('../lib')

// dimensions
const width = 10
const height = 10

// defines a good upper bound as initial distance value
const max = width * height * 0xff

// will be used to weight distances between points
var weight = new Uint8Array(width * height).fill(1)
// will be used to write the transformed distances
var distance = new Uint32Array(width * height).fill(max)

// defines origin so shortest distance is calculated from here
distance.set([0])

// builds a geodesic distance transform with our provided data
geodes(10, 10)
  .weight(weight)
  .distance(distance)
  .transform()

// lets check out the distance
console.log(distance.toString())