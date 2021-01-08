'use strict';

var almostEqual = function (actual, expected) {
	return actual - expected < 1e-6 && expected - actual < 1e-6;
};

module.exports = function (sinh, t) {
	t.test('should be correct', function (st) {
		st.equal(sinh(NaN), NaN, 'sinh(NaN)');
		st.equal(sinh(+0), +0, 'sinh(+0)');
		st.equal(sinh(-0), -0, 'sinh(-0)');
		st.equal(sinh(Infinity), Infinity, 'sinh(Infinity)');
		st.equal(sinh(-Infinity), -Infinity, 'sinh(-Infinity)');
		st.ok(almostEqual(sinh(-5), -74.20321057778875), 'sinh(-5)');
		st.ok(almostEqual(sinh(2), 3.6268604078470186), 'sinh(2)');
		st.equal(sinh(-2e-17), -2e-17, 'sinh(-2e-17)');
		st.end();
	});

	t.test('is correct for extreme non-infinities', function (st) {
		st.notEqual(sinh(710), Infinity, 'sinh(710) is not Infinity');
		st.ok(almostEqual(sinh(710) / 1e+308, 1.1169973830808557), 'sinh(710) / 1e+308');
		st.end();
	});
};
