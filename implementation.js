'use strict';

var expm1 = require('math.expm1');

var E = Math.E;
var abs = Math.abs;
var exp = Math.exp;
var $isFinite = isFinite;

module.exports = function sinh(value) {
	var x = Number(value);
	if (!$isFinite(x) || x === 0) {
		return x;
	}

	var a = abs(x);
	var s = x < 0 ? -1 : 1;
	if (a < 1) {
		var u = expm1(a);
		return s * u * (1 + (1 / (u + 1))) / 2;
	}
	var t = exp(a - 1);
	return s * (t - (1 / (t * E * E))) * (E / 2);
};
