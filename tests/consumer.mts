import * as api from '@lp-labs/bounding-box-2d';
import { boundsOfPoints } from '@lp-labs/bounding-box-2d';
console.log(
  boundsOfPoints([
    { x: 1, y: 2 },
    { x: -1, y: 4 },
  ]),
);
// @ts-expect-error invalid argument must be rejected by declarations
api.boundsOfPoints([{ x: 0, y: '0' }]);
