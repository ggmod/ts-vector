
export function forEachNonMissing(array: ArrayLike<number>, callback: (value: number, index: number) => void) {
    for (let i = 0; i < array.length; i++) {
        let value = array[i];
        if (value !== undefined && value !== null && !Number.isNaN(value)) {
            if (typeof value !== 'number') throwNotNumerError(value, i);
            callback.call(null, value, i);
        }
    }
}

export function forEachNumber(array: ArrayLike<number>, callback: (value: number, index: number) => void) {
    for (let i = 0; i < array.length; i++) {
        let value = getNumberValue(array, i);
        callback.call(null, value, i);
    }
}

export function forEachNumberPair(v1: ArrayLike<number>, v2: ArrayLike<number>, callback: (x1: number, x2: number, index: number) => void) {
    checkLength(v1, v2);

    for (let i = 0; i < v1.length; i++) {
        let x1 = getNumberValue(v1, i);
        let x2 = getNumberValue(v2, i);
        callback.call(null, x1, x2, i);
    }
}

export function getNumberValue(array: ArrayLike<number>, index: number) {
    let value = array[index];
    if (value === null) { value = undefined; } // +null is 0, but +undefined is NaN, this way both of them will be NaN
    if (value !== undefined && typeof value !== 'number') throwNotNumerError(value, index);
    return value;
}

function throwNotNumerError(value: any, index: number) {
    throw new Error('Vector contains non-numeric value ' + value + ' at index ' + index + ' of type ' + typeof value);
}

function checkLength(v1: ArrayLike<number>, v2: ArrayLike<number>) {
    if (v1.length !== v2.length) {
        throw new Error('vector size difference in vector operation:' + v1.length + ', ' + v2.length);
    }
}
