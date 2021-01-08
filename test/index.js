'use strict';

var sinh = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(sinh, t);

	t.end();
});
