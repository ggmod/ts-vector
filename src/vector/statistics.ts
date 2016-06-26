import { forEachNonMissing } from '../utils/helpers';


export function min(array: ArrayLike<number>): number {
    let min: number;
    forEachNonMissing(array, x => {
        if (min === undefined || x < min) {
            min = x;
        }
    });
    return min;
}

export function argmin(array: ArrayLike<number>): number {
    let min: number;
    let index: number;
    forEachNonMissing(array, (x, i) => {
        if (min === undefined || x < min) {
            min = x;
            index = i;
        }
    });
    return index;
}

export function max(array: ArrayLike<number>): number {
    let max: number;
    forEachNonMissing(array, x => {
        if (max === undefined || x > max) {
            max = x;
        }
    });
    return max;
}

export function argmax(array: ArrayLike<number>): number {
    let max: number;
    let index: number;
    forEachNonMissing(array, (x, i) => {
        if (max === undefined || x > max) {
            max = x;
            index = i;
        }
    });
    return index;
}

export function extent(array: ArrayLike<number>): [number, number] {
    let min: number;
    let max: number;
    forEachNonMissing(array, x => {
        if (max === undefined || x > max) {
            max = x;
        }
        if (min === undefined || x < min) {
            min = x;
        }
    });
    return [min, max];
}

export function mean(array: ArrayLike<number>): number {
    let sum = 0;
    let n = 0;
    forEachNonMissing(array, x => {
        sum += x;
        n++;
    });
    return n === 0 ? undefined : sum / n;
}

// https://en.wikipedia.org/wiki/Algorithms_for_calculating_variance#Online_algorithm
export function variance(array: ArrayLike<number>): number {
    let n = 0;
    let mean = 0;
    let m2 = 0;
    forEachNonMissing(array, x => {
        n++;
        let delta = x - mean;
        mean += delta/n;
        m2 += delta*(x - mean);
    });
    return n > 1 ? (m2 / (n - 1)) : undefined;
}

export function std(array: ArrayLike<number>): number {
    let squared = variance(array);
    return squared == null ? squared : Math.sqrt(squared);
}

export function mad(array: ArrayLike<number>): number {
    let avg = mean(array);
    let sum = 0;
    let n = 0;
    forEachNonMissing(array, x => {
        sum += Math.abs(avg - x);
        n++;
    });
    return n === 0 ? undefined : sum / n;
}

export function mode(array: ArrayLike<number>): number {
    let counts: { [key: string]: number } = {};
    forEachNonMissing(array, x => {
        if (!counts[x]) {
            counts[x] = 1;
        } else {
            counts[x]++;
        }
    });

    let maxValue: string;
    let maxCount = 0;
    Object.keys(counts).forEach(key => {
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            maxValue = key;
        }
    });
    return maxValue ? Number(maxValue) : undefined;
}
