
export function equals<T>(a: ArrayLike<T>, b: ArrayLike<T>): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function copy(v: ArrayLike<any>): ArrayLike<any> {
    let result: ArrayLike<any> = (<any>v.constructor).from({ length: v.length });
    for (let i = 0; i < v.length; i++) {
        result[i] = v[i];
    }
    return result;
}

export function shuffle(v: ArrayLike<any>): ArrayLike<any> {
    for (let i = v.length; i > 0; i -= 1) {
        let j = Math.floor(Math.random() * i);
        let x = v[i - 1];
        v[i - 1] = v[j];
        v[j] = x;
    }
    return v;
}

export function transform<T>(v: ArrayLike<T>, callback: (item: T, index: number, array: ArrayLike<T>) => void): ArrayLike<T> {
    for (let i = 0; i < v.length; i++) {
        v[i] = callback.call(null, v[i], i, v);
    }
    return v;
}

export function each<T>(v: ArrayLike<T>, callback: (item: T, index: number, array: ArrayLike<T>) => void): ArrayLike<T> {
    for (let i = 0; i < v.length; i++) {
        callback.call(null, v[i], i, v);
    }
    return v;
}

export function fillBy<T>(v: ArrayLike<T>, fn: (index: number, array: ArrayLike<T>) => T): ArrayLike<T> {
    for (let i = 0; i < v.length; i++) {
        v[i] = fn.call(null, i, v);
    }
    return v;
}
