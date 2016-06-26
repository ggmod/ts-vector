import { forEachNumber, getNumberValue } from '../utils/helpers';


function _cumsum(v: ArrayLike<number>, out: ArrayLike<number>) {
    forEachNumber(v, (x, i) => {
        out[i] = x + (i == 0 ? 0 : out[i-1]);
    });
}

function _diff(v: ArrayLike<number>, out: ArrayLike<number>) {
    let prev = getNumberValue(v, 0);
    for (let i = 1; i < v.length; i++) {
        let x = getNumberValue(v, i);
        out[i - 1] = x - prev;
        prev = x;
    }
}

export function cumsum<V extends ArrayLike<number>>(v: V): V {
    let out: V = (<any>v.constructor).from({ length: v.length });
    _cumsum(v, out);
    return out;
}

export function diff<V extends ArrayLike<number>>(v: V): V {
    let out: V = (<any>v.constructor).from({ length: v.length - 1 });
    _diff(v, out);
    return out;
}
