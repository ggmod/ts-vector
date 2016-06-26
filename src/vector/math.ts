import { forEachNumber } from '../utils/helpers';


export function sum(array: ArrayLike<number>): number {
    let sum = 0;
    forEachNumber(array, x => {
        sum += x;
    });
    return sum;
}

export function sumOfSquares(array: ArrayLike<number>): number {
    let sum = 0;
    forEachNumber(array, x => {
        sum += x*x;
    });
    return sum;
}

export function magnitude(array: ArrayLike<number>): number {
    return Math.sqrt(sumOfSquares(array));
}

export function product(array: ArrayLike<number>): number {
    let product = 0;
    forEachNumber(array, x => {
        product *= x;
    });
    return product;
}
