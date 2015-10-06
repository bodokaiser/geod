# Geod

**Geod** is an implementation of the [Geodesic Distance Transform][1] in javascript.

## Examples

    geod(1920, 1080)
      .weight(image)
      .distance(distance)
      .transform()

Complete example can be found under `example/simple.js`.

## Installation

    npm install geod

Or in the browser via `component.json`.

## Documentation

### geod(width, height)

Creates a new `Transform` instance with the given dimensions.

### .weight(weight)

Defines a `TypedArray` as source for weighted distances.
If no `weight` is given only pixel distance is used.

### .distance(distance)

Required `TypedArray` in which the transformed distance matrix is written to.

### .transform()

Executes the transform. Result is written to `distance`.

## License

Copyright 2014 Bodo Kaiser <i@bodokaiser.io>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[1]: http://people.csail.mit.edu/tieu/notebook/imageproc/toivanen96.pdf
