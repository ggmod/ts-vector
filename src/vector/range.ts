
export function range(start: number, stop: number, step: number, type: any): ArrayLike<number> {
    if (stop == null && step == null) {
        stop = start;
        start = null;
    }
    start = start == null ? 0 : start;
    step = step == null ? (start <= stop ? 1 : -1) : step;
    if ((stop - start) / step < 0) throw new Error('Infinite loop');

    let v: ArrayLike<number> = type.from({ length: Math.ceil((stop - start)/ step) });
    let x: number;
    let i = 0;

    if (start < stop) {
        while ((x = start + i * step) < stop) {
            v[i++] = x;
        }
    } else {
        while ((x = start + i * step) > stop) {
            v[i++] = x;
        }
    }
    return v;
}

export function linspace(start: number, stop: number, num: number, excludeEnd: boolean, type: any): ArrayLike<number> {
    num = num == null ? 100 : num;

    let step = (stop - start) / (excludeEnd ? num : num - 1);
    let v: ArrayLike<number> = type.from({ length: num });
    for (let i = 0; i < num; i++) {
        v[i] = start + i * step;
    }
    return v;
}

export function logspace(start: number, stop: number, num: number, excludeEnd: boolean, base: number, type: any): ArrayLike<number> {
    num = num == null ? 100 : num;
    base = base == null ? 10: base;

    let step = (stop - start) / (excludeEnd ? num : num - 1);
    let v: ArrayLike<number> = type.from({ length: num });
    for (let i = 0; i < num; i++) {
        v[i] = Math.pow(base, start + i * step);
    }
    return v;
}
