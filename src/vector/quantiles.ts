import { forEachNonMissing } from "../utils/helpers";

// R-7 algorithm that both Excel and d3 use

function quantile(v: ArrayLike<number>, p: number) {
    let h = (v.length - 1) * p + 1;
    let h_ = Math.floor(h);
    let s = h - h_;
    let x = v[h_ - 1];
    return s ? x + s * (v[h_] - x) : x;
}

function getSortedNumbers(v: Array<number>) {
    let values: number[] = [];
    forEachNonMissing(v, x => { values.push(x); });
    return values.sort((a, b) => a - b);
}

export function quantiles(v: Array<number>, q: number) {
    let sorted = getSortedNumbers(v);

    let result: number[] = (<any>v.constructor).from({ length: q + 1 });
    for (let i = 0; i <= q; i++) {
        result[i] = quantile(sorted, i/q);
    }
    return result;
}

export function median(v: Array<number>) {
    if (v.length === 0) return;
    let sorted = getSortedNumbers(v);
    return quantile(sorted, 0.5);
}
