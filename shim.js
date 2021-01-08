'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimMathSinh() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ sinh: polyfill },
		{ sinh: function () { return Math.sinh !== polyfill; } }
	);
	return polyfill;
};
