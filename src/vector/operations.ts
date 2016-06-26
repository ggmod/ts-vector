import { forEachNumber, forEachNumberPair } from '../utils/helpers';


function scalarOperation(v: ArrayLike<number>, s: number, output: ArrayLike<number>,
                         operation: (x: number, y: number) => number) {
    forEachNumber(v, (x, i) => {
        output[i] = operation(x, s);
    });
}

function scalarOperation2(s: number, v: ArrayLike<number>, output: ArrayLike<number>,
                         operation: (x: number, y: number) => number) {
    forEachNumber(v, (x, i) => {
        output[i] = operation(s, x);
    });
}

function binaryOperation(v1: ArrayLike<number>, v2: ArrayLike<number>, output: ArrayLike<number>,
                         operation: (x: number, y: number) => number) {
    forEachNumberPair(v1, v2, (x1, x2, i) => {
        output[i] = operation(x1, x2);
    });
}


export function vectorOperation<V extends Array<number>>(v: V, param: number, modifySelf: boolean, operation: (x: number, y: number) => number): V;
export function vectorOperation<V extends Array<number>>(v: V, param: ArrayLike<number>, modifySelf: boolean, operation: (x: number, y: number) => number): V;
export function vectorOperation<V extends Array<number>>(v: V, param: any, modifySelf: boolean, operation: (x: number, y: number) => number): V {
    let output = modifySelf ? v : (<any>v.constructor).from({ length: v.length });

    if (typeof param === 'number') {
        scalarOperation(v, param, output, operation);
    } else if (param.length !== undefined) {
        binaryOperation(v, param, output, operation);
    } else {
        throw new Error('Can\'t perform vector operation on object with invalid type:' + param + ', ' + typeof param);
    }
    return output;
}


export function vectorOperation2(v1: number, v2: number, type: any, operation: (x: number, y: number) => number): number;
export function vectorOperation2(v1: number, v2: ArrayLike<number>, type: any, operation: (x: number, y: number) => number): ArrayLike<number>;
export function vectorOperation2(v1: ArrayLike<number>, v2: number, type: any, operation: (x: number, y: number) => number): ArrayLike<number>;
export function vectorOperation2(v1: ArrayLike<number>, v2: ArrayLike<number>, type: any, operation: (x: number, y: number) => number): ArrayLike<number>;
export function vectorOperation2(v1: any, v2: any, type: any, operation: (x: number, y: number) => number): any {

    if (typeof v1 === 'number' && typeof v2 === 'number') {
        return operation(v1, v2);
    }

    let output = type.from({ length: v1.length || v2.length });

    if (typeof v1 === 'number' && v2.length !== undefined) {
        scalarOperation2(v1, v2, output, operation);
    } else if (v1.length !== undefined && typeof v2 === 'number') {
        scalarOperation(v1, v2, output, operation);
    } else if (v1.length !== undefined && v2.length !== undefined) {
        binaryOperation(v1, v2, output, operation);
    } else {
        throw new Error('Can\'t perform vector operation on objects with invalid type: ' + typeof v1 + ', ' + typeof v2);
    }
    return output;
}
