import { forEachNumber } from '../utils/helpers';
import { sum, magnitude } from './math';
import { mean, std } from './statistics';


export function normalizeProba(v: ArrayLike<number>) {
    let s = sum(v);
    forEachNumber(v, (x, i) => {
        v[i] /= s;
    });
}

export function normalizeVector(v: ArrayLike<number>) {
    let s = magnitude(v);
    forEachNumber(v, (x, i) => {
        v[i] /= s;
    });
}

export function normalizeStats(v: ArrayLike<number>) {
    let m = mean(v);
    let o = std(v);
    forEachNumber(v, (x, i) => {
        v[i] = (x - m) / o;
    });
}
