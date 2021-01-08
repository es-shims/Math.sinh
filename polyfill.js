/* eslint-disable no-magic-numbers */

'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.sinh;
	if (!native
		// Chrome < 40 sinh returns ∞ for large numbers
		|| native(710) === Infinity
		// node 0.11 has an imprecise Math.sinh with very small numbers
		|| native(-2e-17) !== -2e-17
	) {
		return implementation;
	}
	return native;
};
