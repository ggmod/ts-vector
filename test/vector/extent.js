import { Vector } from '../../src/index';


const extent = array => Vector.from(array).extent();

describe('extent value of numeric vector', () => {

    it('works on numbers', () => {
        expect(extent([1])).toEqual([1, 1]);
        expect(extent([43, 5])).toEqual([5, 43]);
        expect(extent([5, 43])).toEqual([5, 43]);
        expect(extent([4,1,7,23,5,100])).toEqual([1, 100]);
        expect(extent([4,1,7,-23,5,100])).toEqual([-23, 100]);
    });

    it('works with missing values', () => {
        expect(extent([])).toEqual([ undefined, undefined ]);
        expect(extent([undefined])).toEqual([ undefined, undefined ]);
        expect(extent([null])).toEqual([ undefined, undefined ]);
        expect(extent([NaN])).toEqual([ undefined, undefined ]);
        expect(extent([null, undefined, NaN])).toEqual([ undefined, undefined ]);
        expect(extent([null, 34, undefined, NaN])).toEqual([34, 34]);
        expect(extent([11, 7, null, 34, undefined, 5, NaN, 80])).toEqual([5, 80]);
    });

    it('works with infinities', () => {
        expect(extent([5, Infinity, 3])).toEqual([3, Infinity]);
        expect(extent([5, -Infinity, -30, 10])).toEqual([-Infinity, 10]);
        expect(extent([NaN, undefined, Infinity, -Infinity, null])).toEqual([-Infinity, Infinity]);
    });
});
