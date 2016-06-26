import { forEachNumberPair } from '../utils/helpers';


export function dotProduct(v1: ArrayLike<number>, v2: ArrayLike<number>): number {
    let y = 0;
    forEachNumberPair(v1, v2, (x1, x2) => {
        y += x1 * x2;
    });
    return y;
}
