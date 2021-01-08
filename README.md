# Math.sinh <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant `Math.sinh` shim/polyfill/replacement that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-map-objects).

## Getting started

```sh
npm install --save math.sinh
```

## Usage/Examples

```js
console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // 1.1752011936438014
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/math.sinh
[npm-version-svg]: https://versionbadg.es/es-shims/Math.sinh.svg
[deps-svg]: https://david-dm.org/es-shims/Math.sinh.svg
[deps-url]: https://david-dm.org/es-shims/Math.sinh
[dev-deps-svg]: https://david-dm.org/es-shims/Math.sinh/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/Math.sinh#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/math.sinh.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/math.sinh.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/math.sinh.svg
[downloads-url]: https://npm-stat.com/charts.html?package=math.sinh
