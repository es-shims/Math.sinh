/* eslint-disable no-magic-numbers */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var original = Math.sinh;
	if (
		!original
		// Chrome < 40 sinh returns ∞ for large numbers
		|| original(710) === Infinity
		// node 0.11 has an imprecise Math.sinh with very small numbers
		|| original(-2e-17) !== -2e-17
	) {
		return implementation;
	}
	return original;
};
