import { ValueArray } from '../../src/index';

let v = array => ValueArray.from(array);

describe('Primitive values', () => {

    it('equals', () => {
        expect(v([0, 1, 2, 3, 4, 5]).equals([0, 1, 2, 3, 4, 5])).toBe(true);
        expect(v([0, 1, 2, 3, 4, 5]).equals(v([0, 1, 2, 3, 4, 5]))).toBe(true);
        expect(v([0, 1, 2, 3, 4, 5]).equals([0, 1, 2, 7, 4, 5])).toBe(false);
        expect(v([0, 1, 2, 3, 4, 5]).equals(v([0, 1, 2, 7, 4, 5]))).toBe(false);
        expect(v([0, 1, 2, 3, 4, 5]).equals([0, 1, 2, 3])).toBe(false);
        expect(v([0, 1, 2, 3, 4, 5]).equals(v([0, 1, 2, 3]))).toBe(false);
    });

    it('copy', () => {
        expect(v([0, 1, 2, 3, 4, 5]).copy()).toEqual([0, 1, 2, 3, 4, 5]);

        let x = v([0, 1, 2, 3, 4, 5]);
        expect(x.copy() === x).toBe(false);

        class MyArray extends ValueArray {}
        let y = MyArray.from([0, 1, 2, 3, 4, 5]);
        expect(y.copy() instanceof MyArray).toBe(true);
    });

    it('padding', () => {
        let x = v([1, 2, 3, 4, 5]);
        expect(x.padStart(10, 0) === x).toBe(true);
        expect(v([1, 2, 3, 4, 5]).padStart(8, 0)).toEqual([0, 0, 0, 1, 2, 3, 4, 5]);
        expect(x.padEnd(10, 0) === x).toBe(true);
        expect(v([1, 2, 3, 4, 5]).padEnd(8, 0)).toEqual([1, 2, 3, 4, 5, 0, 0, 0]);
    });

    it('fill by', () => {
        expect(new ValueArray(5).fillBy(i => i)).toEqual([0, 1, 2, 3, 4]);
        expect(new ValueArray(5).fillBy(i => i*i)).toEqual([0, 1, 4, 9, 16]);
    })
});
