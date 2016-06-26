
export function count<T>(v: ArrayLike<T>, param: T): number;
export function count<T>(v: ArrayLike<T>, param: (item: T, index: number, array: ArrayLike<T>) => boolean): number;
export function count<T>(v: ArrayLike<T>, param: any): number {
    let count = 0;
    for (let i = 0; i < v.length; i++) {
        if (typeof param === 'function') {
            if (param.call(null, v[i], i, v)) count++;
        } else if (param === v[i] || (Number.isNaN(<any>param) && Number.isNaN(<any>v[i]))) {
            count++;
        }
    }
    return count;
}

export function counts<T>(v: ArrayLike<T>): Map<T, number> {
    let counts = new Map<T, number>();
    for (let i = 0; i < v.length; i++) {
        let x = v[i];
        counts.set(x, (counts.get(x) || 0) + 1);
    }
    return counts;
}

export function unique<T>(v: ArrayLike<T>): ArrayLike<T> {
    let set = new Set<T>();
    let result: any = new (<any>v).constructor();

    for (let i = 0; i < v.length; i++) {
        let x = v[i];
        if (!set.has(x)) {
            result.push(x);
            set.add(x);
        }
    }
    return result;
}
