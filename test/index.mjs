import sinh, * as sinhModule from 'math.sinh';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(sinh, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(sinhModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = sinhModule;
	t.equal(await import('math.sinh/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.sinh/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.sinh/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
