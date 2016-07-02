import { Vector } from '../../src/index';


const max = array => Vector.from(array).max();

describe('Max value of numeric vector', () => {

    it('works on numbers', () => {
        expect(max([1])).toBe(1);
        expect(max([43, 5])).toBe(43);
        expect(max([5, 43])).toBe(43);
        expect(max([4,1,7,23,5,100])).toBe(100);
        expect(max([4,1,7,-23,5,100])).toBe(100);
    });

    it('works with missing values', () => {
        expect(max([])).toBe(undefined);
        expect(max([undefined])).toBe(undefined);
        expect(max([null])).toBe(undefined);
        expect(max([NaN])).toBe(undefined);
        expect(max([null, undefined, NaN])).toBe(undefined);
        expect(max([11, 77, null, 34, undefined, 5, NaN, 18])).toBe(77);
    });

    it('works with infinities', () => {
        expect(max([5, Infinity, 3])).toBe(Infinity);
        expect(max([5, -Infinity, -30, 10])).toBe(10);
        expect(max([NaN, undefined, Infinity, -Infinity, null])).toBe(Infinity);
    });
});
