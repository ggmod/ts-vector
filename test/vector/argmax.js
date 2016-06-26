import { Vector } from '../../src/main';


const argmax = array => Vector.from(array).argmax();

describe('argmax of numeric vector', () => {

    it('works on numbers', () => {
        expect(argmax([1])).toBe(0);
        expect(argmax([43, 5])).toBe(0);
        expect(argmax([5, 43])).toBe(1);
        expect(argmax([4,1,7,23,5,17])).toBe(3);
        expect(argmax([4,1,7,-23,5,100])).toBe(5);
    });

    it('returns the first occurance', () => {
        expect(argmax([4,2,100,7,23,5,1,100])).toBe(2);
    });

    it('works with missing values', () => {
        expect(argmax([])).toBe(undefined);
        expect(argmax([undefined])).toBe(undefined);
        expect(argmax([null])).toBe(undefined);
        expect(argmax([NaN])).toBe(undefined);
        expect(argmax([null, undefined, NaN])).toBe(undefined);
        expect(argmax([11, 77, null, 34, undefined, 5, NaN, 18])).toBe(1);
    });

    it('works with infinities', () => {
        expect(argmax([5, Infinity, 3])).toBe(1);
        expect(argmax([5, -Infinity, -30, 10])).toBe(3);
        expect(argmax([NaN, undefined, Infinity, -Infinity, null])).toBe(2);
    });
});
