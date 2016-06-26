
export function padStart<T>(v: Array<T>, length: number, value?: T): Array<T> {
    while (v.length < length) {
        v.unshift(value);
    }
    return v;
}

export function padEnd<T>(v: Array<T>, length: number, value?: T): Array<T> {
    while (v.length < length) {
        v.push(value);
    }
    return v;
}
