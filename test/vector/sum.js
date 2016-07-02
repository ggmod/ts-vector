import { Vector } from '../../src/index';


const sum = array => Vector.from(array).sum();

describe('sum value of numeric vector', () => {

    it('works on numbers', () => {
        expect(sum([1])).toBe(1);
        expect(sum([43, 5])).toBe(48);
        expect(sum([5, 43])).toBe(48);
        expect(sum([4,1,7,23,5,100])).toBe(140);
        expect(sum([4,1,7,-23,5,100])).toBe(94);
    });

    it('works with missing values', () => {
        expect(sum([])).toBe(0);
        expect(sum([undefined])).toBeNaN();
        expect(sum([null])).toBeNaN();
        expect(sum([NaN])).toBeNaN();
        expect(sum([null, undefined, NaN])).toBeNaN();
        expect(sum([null, undefined, null, NaN, NaN])).toBeNaN();
        expect(sum([11, 7, null, 34, undefined, 5, NaN, 80])).toBeNaN();
    });

    it('works with infinities', () => {
        expect(sum([5, Infinity, 3])).toBe(Infinity);
        expect(sum([5, -Infinity, -30, 10])).toBe(-Infinity);
        expect(sum([NaN, undefined, Infinity, -Infinity, null])).toBeNaN();
    });

    it('with non-numeric array items', () => {
        expect(() => sum([5, '3', 12])).toThrow();
    });
});
