import { range, permute } from './value-array/indexing';
import { count, counts, unique } from './value-array/counts';
import { equals, copy, shuffle, transform, each, fillBy } from './value-array/basic';
import { padStart, padEnd } from './value-array/padding'


export default class ValueArray<T> extends Array<T> {

    get first() { return this.length > 0 ? this[0] : undefined; }
    get last() { return this.length > 0 ? this[this.length - 1] : undefined; }

    head(n?: number): this { return <this>this.slice(0, n || 10); }
    tail(n?: number): this { return <this>this.slice(-(n || 10)); }

    range(start?: number, end?: number, step?: number): this { return <this>range(this, start, end, step); }
    permute(indexes: ArrayLike<number>): this { return <this>permute(this, indexes); }

    shuffle(): this { return <this>shuffle(this); }

    transform(callback: (item: T, index: number, array: this) => void): this { return <this>transform(this, callback) };
    each(callback: (item: T, index: number, array: this) => void): this { return <this>each(this, callback); }
    fillBy(fn: (index: number, array: this) => T): this { return <this>fillBy(this, fn); }

    padStart(length: number, value?: T): this { return <this>padStart(this, length, value); }
    padEnd(length: number, value?: T): this { return <this>padEnd(this, length, value); }

    equals(a: ArrayLike<T>): boolean { return equals(this, a); }
    copy(): this { return <this>copy(this); }

    toSet(): Set<T> { return new Set(this); }

    unique(): this { return <this>unique(this); }

    counts(): Map<T, number> { return counts(this); }

    count(param: T): number;
    count(param: (item: T, index: number, array: this) => boolean): number;
    count(param: any): number {
        return count(this, param);
    }
}
