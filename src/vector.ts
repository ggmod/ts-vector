import { min, max, extent, mean, variance, std, mad, argmin, argmax, mode } from './vector/statistics';
import { sum, sumOfSquares, magnitude, product } from './vector/math';
import {
    add, subtract, multiply, divide, pow,
    and, or,
    lessThan, moreThan, lessOrEqualThan, moreOrEqualThan,
    equal, notEqual
} from './utils/operations';
import { vectorOperation, vectorOperation2 } from './vector/operations';
import { dotProduct } from './vector/dot-product';
import { median, quantiles } from './vector/quantiles';
import { histogram, Histogram, HistogramOptions } from './vector/histogram';
import { cumsum, diff } from './vector/cumulative';
import { normalizeStats, normalizeProba, normalizeVector } from './vector/normalize';
import { stats, NumberArrayStats } from './vector/stats';
import { range, linspace, logspace } from './vector/range';


export default class Vector extends Array<number> {

    // Statistics:

    min(): number { return min(this); }
    max(): number { return max(this); }
    extent(): [number, number] { return extent(this); }
    mean(): number { return mean(this); }
    variance(): number { return variance(this); }
    std(): number { return std(this); }
    mad(): number { return mad(this); }
    mode(): number { return mode(this); }

    argmin(): number { return argmin(this); }
    argmax(): number { return argmax(this); }

    median(): number { return median(this); }
    quantiles(q: number): this { return <this>quantiles(this, q); }

    histogram(options?: HistogramOptions): Histogram<this> { return histogram(this, options); }

    normalizeStats(): this { normalizeStats(this); return this; }
    normalizeProba(): this { normalizeProba(this); return this; }
    normalizeVector(): this { normalizeVector(this); return this; }

    stats(): NumberArrayStats { return stats(this); }

    // math:

    sum(): number { return sum(this); }
    sumOfSquares(): number { return sumOfSquares(this); }
    magnitude(): number { return magnitude(this); }
    product(): number { return product(this); }

    cumsum(): this { return cumsum(this); }
    diff(): this { return diff(this); }

    // override:

    sort(): this { return <this>super.sort((a, b) => a - b); }
    sortDesc(): this { return <this>super.sort((a, b) => b - a); }
    some(callback?: (value: number, index: number, array: this) => boolean): boolean {
        return callback ? super.some(callback) : super.some(x => !!x);
    }
    every(callback?: (value: number, index: number, array: this) => boolean): boolean {
        return callback ? super.every(callback) : super.every(x => !!x);
    }

    // "operator overloading":

    // - pairwise math:

    add(param: number): this;
    add(param: ArrayLike<number>): this;
    add(param: any): this {
        return vectorOperation(this, param, false, add);
    }

    addSelf(param: number): this;
    addSelf(param: ArrayLike<number>): this;
    addSelf(param: any): this {
        return vectorOperation(this, param, true, add);
    }

    subtract(param: number): this;
    subtract(param: ArrayLike<number>): this;
    subtract(param: any): this {
        return vectorOperation(this, param, false, subtract);
    }

    subtractSelf(param: number): this;
    subtractSelf(param: ArrayLike<number>): this;
    subtractSelf(param: any): this {
        return vectorOperation(this, param, true, subtract);
    }

    multiply(param: number): this;
    multiply(param: ArrayLike<number>): this;
    multiply(param: any): this {
        return vectorOperation(this, param, false, multiply);
    }

    multiplySelf(param: number): this;
    multiplySelf(param: ArrayLike<number>): this;
    multiplySelf(param: any): this {
        return vectorOperation(this, param, true, multiply);
    }

    divide(param: number): this;
    divide(param: ArrayLike<number>): this;
    divide(param: any): this {
        return vectorOperation(this, param, false, divide);
    }

    divideSelf(param: number): this;
    divideSelf(param: ArrayLike<number>): this;
    divideSelf(param: any): this {
        return vectorOperation(this, param, true, divide);
    }

    pow(param: number): this;
    pow(param: ArrayLike<number>): this;
    pow(param: any): this {
        return vectorOperation(this, param, false, pow);
    }

    powSelf(param: number): this;
    powSelf(param: ArrayLike<number>): this;
    powSelf(param: any): this {
        return vectorOperation(this, param, true, pow);
    }

    // - logical and/or:

    and(v: ArrayLike<number>): this { return vectorOperation(this, v, false, and); }
    or(v: ArrayLike<number>): this { return vectorOperation(this, v, false, or); }

    // - comparisons:

    lessThan(param: number): this;
    lessThan(param: ArrayLike<number>): this;
    lessThan(param: any): this {
        return vectorOperation(this, param, false, lessThan);
    }

    moreThan(param: number): this;
    moreThan(param: ArrayLike<number>): this;
    moreThan(param: any): this {
        return vectorOperation(this, param, false, moreThan);
    }

    lessOrEqualThan(param: number): this;
    lessOrEqualThan(param: ArrayLike<number>): this;
    lessOrEqualThan(param: any): this {
        return vectorOperation(this, param, false, lessOrEqualThan);
    }

    moreOrEqualThan(param: number): this;
    moreOrEqualThan(param: ArrayLike<number>): this;
    moreOrEqualThan(param: any): this {
        return vectorOperation(this, param, false, moreOrEqualThan);
    }

    // - equality:

    equal(param: number): this;
    equal(param: ArrayLike<number>): this;
    equal(param: any): this {
        return vectorOperation(this, param, false, equal);
    }

    notEqual(param: number): this;
    notEqual(param: ArrayLike<number>): this;
    notEqual(param: any): this {
        return vectorOperation(this, param, false, notEqual);
    }

    // - matrix product:

    dot(v: ArrayLike<number>): number { return dotProduct(this, v); }

    // static "operator overloading"

    static add(v1: number, v2: number): number;
    static add(v1: number, v2: ArrayLike<number>): Vector;
    static add(v1: ArrayLike<number>, v2: number): Vector;
    static add(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static add(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, add);
    }

    static subtract(v1: number, v2: number): number;
    static subtract(v1: number, v2: ArrayLike<number>): Vector;
    static subtract(v1: ArrayLike<number>, v2: number): Vector;
    static subtract(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static subtract(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, subtract);
    }

    static multiply(v1: number, v2: number): number;
    static multiply(v1: number, v2: ArrayLike<number>): Vector;
    static multiply(v1: ArrayLike<number>, v2: number): Vector;
    static multiply(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static multiply(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, multiply);
    }

    static divide(v1: number, v2: number): number;
    static divide(v1: number, v2: ArrayLike<number>): Vector;
    static divide(v1: ArrayLike<number>, v2: number): Vector;
    static divide(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static divide(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, divide);
    }

    static pow(v1: number, v2: number): number;
    static pow(v1: number, v2: ArrayLike<number>): Vector;
    static pow(v1: ArrayLike<number>, v2: number): Vector;
    static pow(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static pow(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, pow);
    }

    static and(v1: number, v2: number): number;
    static and(v1: number, v2: ArrayLike<number>): Vector;
    static and(v1: ArrayLike<number>, v2: number): Vector;
    static and(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static and(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, and);
    }

    static or(v1: number, v2: number): number;
    static or(v1: number, v2: ArrayLike<number>): Vector;
    static or(v1: ArrayLike<number>, v2: number): Vector;
    static or(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static or(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, or);
    }

    static lessThan(v1: number, v2: number): number;
    static lessThan(v1: number, v2: ArrayLike<number>): Vector;
    static lessThan(v1: ArrayLike<number>, v2: number): Vector;
    static lessThan(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static lessThan(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, lessThan);
    }

    static moreThan(v1: number, v2: number): number;
    static moreThan(v1: number, v2: ArrayLike<number>): Vector;
    static moreThan(v1: ArrayLike<number>, v2: number): Vector;
    static moreThan(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static moreThan(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, moreThan);
    }

    static lessOrEqualThan(v1: number, v2: number): number;
    static lessOrEqualThan(v1: number, v2: ArrayLike<number>): Vector;
    static lessOrEqualThan(v1: ArrayLike<number>, v2: number): Vector;
    static lessOrEqualThan(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static lessOrEqualThan(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, lessOrEqualThan);
    }

    static moreOrEqualThan(v1: number, v2: number): number;
    static moreOrEqualThan(v1: number, v2: ArrayLike<number>): Vector;
    static moreOrEqualThan(v1: ArrayLike<number>, v2: number): Vector;
    static moreOrEqualThan(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static moreOrEqualThan(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, moreOrEqualThan);
    }

    static equal(v1: number, v2: number): number;
    static equal(v1: number, v2: ArrayLike<number>): Vector;
    static equal(v1: ArrayLike<number>, v2: number): Vector;
    static equal(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static equal(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, equal);
    }

    static notEqual(v1: number, v2: number): number;
    static notEqual(v1: number, v2: ArrayLike<number>): Vector;
    static notEqual(v1: ArrayLike<number>, v2: number): Vector;
    static notEqual(v1: ArrayLike<number>, v2: ArrayLike<number>): Vector;
    static notEqual(v1: any, v2: any): any {
        return vectorOperation2(v1, v2, this, notEqual);
    }

    // static constructors:

    static range(start: number, stop?: number, step?: number): Vector {
        return <Vector>range(start, stop, step, this);
    }

    static linspace(start: number, stop: number, num?: number, excludeEnd?: boolean): Vector {
        return <Vector>linspace(start, stop, num, excludeEnd, this);
    }

    static logspace(start: number, stop: number, num?: number, excludeEnd?: boolean, base?: number): Vector {
        return <Vector>logspace(start, stop, num, excludeEnd, base, this);
    }
}
