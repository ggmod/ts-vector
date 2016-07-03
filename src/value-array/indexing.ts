
export function range(v: ArrayLike<any>, start?: number, end?: number, step?: number): ArrayLike<any> {
    step = step == null ? 1 : step;
    start = start == null ? 0 : (start < 0 ? v.length + start : start);
    end = end == null ? v.length : (end < 0 ? v.length + end : end);

    let result: ArrayLike<any> = (<any>v.constructor).from({ length: Math.ceil((end - start) / step) });
    let j = 0;
    if (step > 0) {
        for (let i = start; i < end; i += step) {
            result[j] = v[i];
            j++;
        }
    } else {
        for (let i = end - 1; i >= start; i += step) {
            result[j] = v[i];
            j++;
        }
    }
    return result;
}

export function permute(v: ArrayLike<any>, indexes: ArrayLike<number>): ArrayLike<any> {
    let result: ArrayLike<any> = (<any>v.constructor).from({ length: indexes.length });

    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] >= 0) {
            result[i] = v[indexes[i]];
        } else {
            result[i] = v[v.length + indexes[i]];
        }
    }
    return result;
}
