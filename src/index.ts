export interface Bounds {
  readonly minX: number;
  readonly minY: number;
  readonly maxX: number;
  readonly maxY: number;
  readonly width: number;
  readonly height: number;
}
export function boundsOfPoints(
  points: readonly { readonly x: number; readonly y: number }[],
): Bounds | null {
  if (!Array.isArray(points)) throw new TypeError('Expected points');
  if (points.length > 1000000) throw new RangeError('Point limit exceeded');
  if (points.some((p) => !p || !Number.isFinite(p.x) || !Number.isFinite(p.y)))
    throw new TypeError('Points must be finite');
  if (!points.length) return null;
  let minX = Infinity,
    minY = Infinity,
    maxX = -Infinity,
    maxY = -Infinity;
  for (const p of points) {
    minX = Math.min(minX, p.x);
    minY = Math.min(minY, p.y);
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  return { minX, minY, maxX, maxY, width: maxX - minX, height: maxY - minY };
}
