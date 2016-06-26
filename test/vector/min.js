import { Vector } from '../../src/main';


const min = array => Vector.from(array).min();

describe('Min value of numeric vector', () => {

    it('works on numbers', () => {
        expect(min([1])).toBe(1);
        expect(min([43, 5])).toBe(5);
        expect(min([5, 43])).toBe(5);
        expect(min([4,1,7,23,5,100])).toBe(1);
        expect(min([4,1,7,-23,5,100])).toBe(-23);
    });

    it('works with missing values', () => {
        expect(min([])).toBe(undefined);
        expect(min([undefined])).toBe(undefined);
        expect(min([null])).toBe(undefined);
        expect(min([NaN])).toBe(undefined);
        expect(min([null, undefined, NaN])).toBe(undefined);
        expect(min([11, 7, null, 34, undefined, 5, NaN, 80])).toBe(5);
    });

    it('works with infinities', () => {
        expect(min([5, Infinity, 3])).toBe(3);
        expect(min([5, -Infinity, -30, 10])).toBe(-Infinity);
        expect(min([NaN, undefined, Infinity, -Infinity, null])).toBe(-Infinity);
    });

    it('with non-numeric array items', () => {
        expect(() => min([5, '3', 12])).toThrow();
    });
});
