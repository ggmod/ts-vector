import { ValueArray } from '../../src/main';

let v = array => ValueArray.from(array);

describe('Indexing', () => {

    it('first', () => {
        expect(v([3, 1, 2, 7, 10]).first).toEqual(3);
        expect(v([]).first).toEqual(undefined);
    });

    it('last', () => {
        expect(v([3,1,2,7,10]).last).toEqual(10);
        expect(v([]).last).toEqual(undefined);
    });

    it('head', () => {
        expect(v([3, 1, 2, 7, 10]).head(3)).toEqual([3,1,2]);
        expect(v([3, 1, 2, 7, 10]).head(10)).toEqual([3,1,2,7,10]);
        expect(v([]).head()).toEqual([]);
        expect(v([3, 1, 2, 7, 10, 2, 1, 2, 7, 10, 1, 1, 2, 7, 10]).head()).toEqual([3,1,2,7,10,2,1,2,7,10]);
    });

    it('tail', () => {
        expect(v([3, 1, 2, 7, 10]).tail(3)).toEqual([2,7,10]);
        expect(v([3, 1, 2, 7, 10]).tail(10)).toEqual([3,1,2,7,10]);
        expect(v([]).tail()).toEqual([]);
        expect(v([3, 1, 2, 7, 10, 2, 1, 2, 7, 10, 1, 1, 2, 7, 10]).tail()).toEqual([2,1,2,7,10,1,1,2,7,10]);
    });

    it('permute', () => {
        expect(v([3, 1, 2, 7, 10]).permute([0, 1, 2, 3, 4])).toEqual([3, 1, 2, 7, 10]);
        expect(v([3, 1, 2, 7, 10]).permute([2, 0, 4, 1, 3])).toEqual([2, 3, 10, 1, 7]);
        expect(v([3, 1, 2, 7, 10]).permute([2, 3, 2, 3, 2])).toEqual([2, 7, 2, 7, 2]);
        expect(v([3, 1, 2, 7, 10]).permute([3])).toEqual([7]);
    });

    it('range', () => {
        expect(v([3, 0, 1, 7, 10]).range(null, 3)).toEqual([3, 0, 1]);
        expect(v([3, 0, 1, 7, 10]).range(null, 3, 2)).toEqual([3, 1]);
        expect(v([3, 0, 1, 7, 10]).range(2)).toEqual([1, 7, 10]);
        expect(v([3, 0, 1, 7, 10]).range(2, null, 2)).toEqual([1, 10]);
        expect(v([3, 0, 1, 7, 10]).range(1, 3)).toEqual([0, 1]);
        expect(v([3, 0, 1, 7, 10]).range(1, 3, 2)).toEqual([0]);
        expect(v([3, 0, 1, 7, 10]).range(null, null, 2)).toEqual([3, 1, 10]);
        expect(v([3, 0, 1, 7, 10]).range(-2)).toEqual([7, 10]);
        expect(v([3, 0, 1, 7, 10]).range(null, -2)).toEqual([3, 0, 1]);
        expect(v([3, 0, 1, 7, 10]).range(-2, null, 2)).toEqual([7]);
        expect(v([3, 0, 1, 7, 10]).range(null, -2, 2)).toEqual([3, 1]);
        expect(v([3, 0, 1, 7, 10]).range(10)).toEqual([]);
        expect(v([3, 0, 1, 7, 10]).range(null, -10)).toEqual([]);
        expect(v([3, 0, 1, 7, 10]).range(-4, -1)).toEqual([0, 1, 7]);
        expect(v([3, 0, 1, 7, 10]).range(-4, -1, 2)).toEqual([0, 7]);
        expect(v([3, 0, 1, 7, 10]).range(null, null, -1)).toEqual([10, 7, 1, 0, 3]);
        expect(v([3, 0, 1, 7, 10]).range(1, 4, -1)).toEqual([7, 1, 0]);
        expect(v([3, 0, 1, 7, 10]).range(1, 4, -2)).toEqual([7, 0]);
        expect(v([3, 0, 1, 7, 10]).range(-4, -1, -2)).toEqual([7, 0]);
        expect(v([3, 0, 1, 7, 10]).range(null, -2, -2)).toEqual([1, 3]);
        expect(v([3, 0, 1, 7, 10]).range(-3, null, -2)).toEqual([10, 1]);
    });
});
