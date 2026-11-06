import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('computes bounds', () => {
  assert.deepEqual(
    api.boundsOfPoints([
      { x: 1, y: 2 },
      { x: -1, y: 4 },
    ]),
    { minX: -1, minY: 2, maxX: 1, maxY: 4, width: 2, height: 2 },
  );
});
test('handles one point', () => {
  assert.deepEqual(api.boundsOfPoints([{ x: 3, y: 4 }]), {
    minX: 3,
    minY: 4,
    maxX: 3,
    maxY: 4,
    width: 0,
    height: 0,
  });
});
test('handles empty points', () => {
  assert.equal(api.boundsOfPoints([]), null);
});
test('handles negative coordinates', () => {
  assert.equal(
    api.boundsOfPoints([
      { x: -5, y: -7 },
      { x: -1, y: -2 },
    ]).width,
    4,
  );
});
test('does not mutate points', () => {
  const p = [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ];
  api.boundsOfPoints(p);
  assert.deepEqual(p, [
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ]);
});
test('rejects non-finite coordinates', () => {
  assert.throws(() => api.boundsOfPoints([{ x: Infinity, y: 0 }]), TypeError);
});
