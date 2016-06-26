import { extent } from './statistics';
import { sum } from './math';
import { forEachNonMissing } from '../utils/helpers';


export interface HistogramOptions {
    min?: number,
    max?: number,
    bins?: number,
    binWidth?: number,
    probability?: boolean
}

export interface Histogram<V extends ArrayLike<number>>{
    x: V,
    y: V,
    dx: number
}

export function histogram<V extends ArrayLike<number>>(v: V, options: HistogramOptions): Histogram<V> {
    options = options || {};
    let min = options.min;
    let max = options.max;

    if (min == null || max == null) {
        let ext = extent(v);
        if (min == null) min = ext[0];
        if (max == null) max = ext[1];
    }

    let bins = options.bins;
    if (options.binWidth) {
        bins = Math.ceil((max - min) / options.binWidth);
    }
    if (bins == null) {
        bins = Math.floor(Math.sqrt(v.length));
    }

    let dx = (max - min) / bins;

    let x: V = (<any>v.constructor).from({ length: bins });
    let y: V = (<any>v.constructor).from({ length: bins });

    for (let i = 0; i < bins; i++) {
        x[i] = min + i * dx;
        y[i] = 0;
    }

    let count = 0;
    forEachNonMissing(v, vi => {
        if (vi >= min && vi < max) {
            y[Math.floor((vi - min) / dx)]++;
        } else if (vi === max) {
            y[y.length - 1]++;
        }
        count++;
    });

    if (options.probability) {
        for (let i = 0; i < y.length; i++) {
            y[i] /= count;
        }
    }

    return { x, y, dx };
}
