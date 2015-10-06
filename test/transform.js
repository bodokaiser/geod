var assert = require('assert')

var Transform = require('../lib/transform')

const simple1 = new Uint8Array([
  0, 1, 2,
  1, 1, 2,
  2, 2, 2
])

const simple2 = new Uint8Array([
  2, 2, 2,
  2, 1, 1,
  2, 1, 0
])

const simple3 = new Uint8Array([
  1, 1, 1,
  1, 0, 1,
  1, 1, 1
])

const complex = new Uint8Array([
  0, 1, 2, 3, 4,
  1, 1, 2, 3, 3,
  2, 2, 2, 2, 2,
  3, 3, 2, 1, 1,
  4, 3, 2, 1, 0
])

describe('Transform', () => {

  beforeEach(() => {
    this.t = new Transform(3, 3)
    this.d = new Uint32Array(9).fill(1)
    this.d.set([0])
  })

  describe('weight', () => {
    it('should not throw error if ok', () => {
      var w = new Uint32Array(9)

      assert.throws(() => this.t.weigth())
      assert.throws(() => this.t.weigth(w))
    })
    it('should throw error on invalid type', () => {
      assert.throws(() => this.t.weigth(null))
      assert.throws(() => this.t.weigth([1, 2]))
    })
    it('should throw error on invalid length', () => {
      var s = new Uint32Array(8)
      var l = new Uint32Array(10)

      assert.throws(() => this.t.weigth(s))
      assert.throws(() => this.t.weigth(l))
    })
  })

  describe('distance', () => {
    it('should not throw error if ok', () => {
      this.t.distance(this.d)
    })
    it('should throw error on missing value', () => {
      assert.throws(() => this.t.distance())
    })
    it('should throw error on invalid type', () => {
      assert.throws(() => this.t.distance(null))
      assert.throws(() => this.t.distance([1, 2]))
    })
    it('should throw error on invalid length', () => {
      var s = new Uint32Array(8)
      var l = new Uint32Array(10)

      assert.throws(() => this.t.distance(s))
      assert.throws(() => this.t.distance(l))
    })
    it('should throw error on missing unique values', () => {
      var d = new Uint32Array(9)

      assert.throws(() => this.t.distance(d))
    })
  })

  describe('transform', () => {
    it('should create empty weight', () => {
      this.t.distance(this.d)
      this.t.transform()

      assert.ok(this.t._weight)
    })
    it('should throw error on missing distance', () => {
      assert.throws(() => this.t.transform())
    })
    it('should transform simple1', () => {
      this.d = new Uint8Array(9).fill(0xff)
      this.d.set([0])

      this.t.distance(this.d)
      this.t.transform()

      assert.deepEqual(this.d, simple1)
    })
    it('should transform simple2', () => {
      this.d = new Uint8Array(9).fill(0xff)
      this.d.set([0], 8)

      this.t.distance(this.d)
      this.t.transform()

      assert.deepEqual(this.d, simple2)
    })
    it('should transform simple3', () => {
      this.d = new Uint8Array(9).fill(0xff)
      this.d.set([0], 4)

      this.t.distance(this.d)
      this.t.transform()

      assert.deepEqual(this.d, simple3)
    })
    it('should transform complex', () => {
      this.t = new Transform(5, 5)
      this.d = new Uint8Array(25).fill(0xff)
      this.d.set([0], 0)
      this.d.set([0], 24)

      this.t.distance(this.d)
      this.t.transform()

      assert.deepEqual(this.d, complex)
    })
  })

})