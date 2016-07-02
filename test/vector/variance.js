import { Vector } from '../../src/index';


const variance = (array) => Vector.from(array).variance();

describe('variance value of numeric vector', () => {

    it('works on numbers', () => {
        expect(variance([1])).toBe(undefined);
        expect(variance([11, 11, 11])).toBe(0);
        expect(variance([43, 5])).toBe(722);
        expect(variance([5, 43])).toBe(722);
        expect(variance([4,1,7,23,5,80])).toBe(924);
    });

    it('works with missing values', () => {
        expect(variance([])).toBe(undefined);
        expect(variance([undefined, undefined])).toBe(undefined);
        expect(variance([null, null])).toBe(undefined);
        expect(variance([NaN, NaN])).toBe(undefined);
        expect(variance([null, undefined, NaN])).toBe(undefined);
        expect(variance([null, undefined, null, NaN, NaN])).toBe(undefined);
        expect(variance([11, 7, null, 34, undefined, 5, NaN, 80])).toBe(999.3);
    });

    it('works with infinities', () => {
        expect(variance([5, Infinity, 3])).toBeNaN();
        expect(variance([5, -Infinity, -30, 10])).toBeNaN();
        expect(variance([NaN, undefined, Infinity, -Infinity, null])).toBeNaN();
    });
});
