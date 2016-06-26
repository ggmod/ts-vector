import { Vector } from '../../src/main';


const mode = array => Vector.from(array).mode();

describe('mode of numeric vector', () => {

    it('works on numbers', () => {
        expect(mode([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17])).toBe(6);
        expect(mode([4,2,1,7,23,5,1,100])).toBe(1);
        // TODO what to return for multimodal: undefined, array or one of the results?
    });

    it('works with missing values', () => {
        expect(mode([])).toBe(undefined);
        expect(mode([undefined])).toBe(undefined);
        expect(mode([null])).toBe(undefined);
        expect(mode([NaN])).toBe(undefined);
        expect(mode([null, undefined, NaN])).toBe(undefined);
        expect(mode([11, 7, null, 34, 7, undefined, 5, NaN, 80])).toBe(7);
        expect(mode([null, null, undefined, undefined, NaN, NaN, 1])).toBe(1);
    });
});
