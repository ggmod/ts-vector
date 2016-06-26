import { Vector } from '../../src/main';


const sumOfSquares = array => Vector.from(array).sumOfSquares();

describe('Sum of squares value of numeric vector', () => {

    it('works on numbers', () => {
        expect(sumOfSquares([1])).toBe(1);
        expect(sumOfSquares([43, 5])).toBe(1874);
        expect(sumOfSquares([5, 43])).toBe(1874);
        expect(sumOfSquares([4,1,7,23,5,100])).toBe(10620);
        expect(sumOfSquares([4,1,7,-23,5,100])).toBe(10620);
    });

    it('works with missing values', () => {
        expect(sumOfSquares([])).toBe(0);
        expect(sumOfSquares([undefined])).toBeNaN();
        expect(sumOfSquares([null])).toBeNaN();
        expect(sumOfSquares([NaN])).toBeNaN();
        expect(sumOfSquares([null, undefined, NaN])).toBeNaN();
        expect(sumOfSquares([null, undefined, null, NaN, NaN])).toBeNaN();
        expect(sumOfSquares([11, 7, null, 34, undefined, 5, NaN, 80])).toBeNaN();
    });

    it('works with infinities', () => {
        expect(sumOfSquares([5, Infinity, 3])).toBe(Infinity);
        expect(sumOfSquares([5, -Infinity, -30, 10])).toBe(Infinity);
        expect(sumOfSquares([NaN, undefined, Infinity, -Infinity, null])).toBeNaN();
    });
});
