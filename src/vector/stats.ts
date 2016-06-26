import { min, max, mean, variance, std, mad, mode } from './statistics';
import { sum } from './math';
import { median, quantiles } from './quantiles';


export interface NumberArrayStats {
    length: number,

    invalidCount: number,
    invalidCounts: { undefined: number, 'null': number, NaN: number, Infinity: number, '-Infinity': number },

    min: number,
    max: number,

    mean: number,
    median: number,
    mode: number,

    std: number,
    variance: number,
    mad: number,

    deciles: number[],

    sum: number
}

export function stats(v: Array<number>): NumberArrayStats {
    let invalids = countInvalid(v);

    return {
        length: v.length,
        invalidCount: invalids.count,
        invalidCounts: invalids.counts,
        min: min(v),
        max: max(v),
        mean: mean(v),
        median: median(v),
        mode: mode(v),
        std: std(v),
        variance: variance(v),
        mad: mad(v),
        deciles: quantiles(v, 10),
        sum: sum(v)
    };
}

function countInvalid(v: ArrayLike<number>) {
    let counts = {
        undefined: 0,
        'null': 0,
        NaN: 0,
        Infinity: 0,
        '-Infinity': 0
    };
    let count = 0;

    for (let i = 0; i < v.length; i++) {
        if ((<any>counts)[v[i]] !== undefined) {
            (<any>counts)[v[i]]++;
            count++;
        }
    }

    return { counts, count };
}
