import { Vector } from '../../src/main';


const argmin = array => Vector.from(array).argmin();

describe('argmin of numeric vector', () => {

    it('works on numbers', () => {
        expect(argmin([1])).toBe(0);
        expect(argmin([43, 5])).toBe(1);
        expect(argmin([5, 43])).toBe(0);
        expect(argmin([4, 1, 7, 23, 5, 100])).toBe(1);
        expect(argmin([4, 1, 7, -23, 5, 100])).toBe(3);
    });

    it('returns the first occurance', () => {
        expect(argmin([4,2,1,7,23,5,1,100])).toBe(2);
    });

    it('works with missing values', () => {
        expect(argmin([])).toBe(undefined);
        expect(argmin([undefined])).toBe(undefined);
        expect(argmin([null])).toBe(undefined);
        expect(argmin([NaN])).toBe(undefined);
        expect(argmin([null, undefined, NaN])).toBe(undefined);
        expect(argmin([11, 7, null, 34, undefined, 5, NaN, 80])).toBe(5);
    });

    it('works with infinities', () => {
        expect(argmin([5, Infinity, 3])).toBe(2);
        expect(argmin([5, -Infinity, -30, 10])).toBe(1);
        expect(argmin([NaN, undefined, Infinity, -Infinity, null])).toBe(3);
    });

    it('with non-numeric array items', () => {
        expect(() => argmin([5, '3', 12])).toThrow();
    });
});
