import { Vector } from '../../src/index';


const mean = array => Vector.from(array).mean();

describe('mean value of numeric vector', () => {

    it('works on numbers', () => {
        expect(mean([1])).toBe(1);
        expect(mean([43, 5])).toBe(24);
        expect(mean([5, 43])).toBe(24);
        expect(mean([4,1,7,23,5,101])).toBe(23.5);
        expect(mean([4,1,7,-23,5,102])).toBe(16);
    });

    it('works with missing values', () => {
        expect(mean([])).toBe(undefined);
        expect(mean([undefined])).toBe(undefined);
        expect(mean([null])).toBe(undefined);
        expect(mean([NaN])).toBe(undefined);
        expect(mean([null, undefined, NaN])).toBe(undefined);
        expect(mean([null, undefined, null, NaN, NaN])).toBe(undefined);
        expect(mean([11, 7, null, 34, undefined, 5, NaN, 80])).toBe(27.4);
    });

    it('works with infinities', () => {
        expect(mean([5, Infinity, 3])).toBe(Infinity);
        expect(mean([5, -Infinity, -30, 10])).toBe(-Infinity);
        expect(mean([NaN, undefined, Infinity, -Infinity, null])).toBeNaN();
    });
});
