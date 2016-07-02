import { ValueArray } from '../../src/index';

let v = array => ValueArray.from(array);

function toDict(map) {
    let result = {};
    map.forEach((value, key) => {
        result[key] = value;
    });
    return result;
}

describe('Counts', () => {

    it('counts', () => {
        expect(toDict(v([]).counts())).toEqual({});
        expect(toDict(v([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]).counts())).toEqual({ 1: 1, 3: 1, 6: 4, 7: 2, 12: 2, 17: 1 });
        expect(toDict(v([null, 1, 1, null, 2, undefined, NaN, NaN]).counts())).toEqual({ null: 2, 1: 2, 2: 1 , undefined: 1, NaN: 2 });

        expect(Array.from(v([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]).counts().keys()).every(key => typeof key === 'number')).toBe(true);
    });

    it('count', () => {
        expect(v([]).count(3)).toEqual(0);
        expect(v([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]).count(6)).toEqual(4);
        expect(v([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]).count(x => x > 7)).toEqual(3);
        expect(v([null, 3, undefined, 2, null, 1, NaN, NaN]).count(null)).toEqual(2);
        expect(v([null, 3, undefined, 2, null, 1, NaN, NaN]).count(undefined)).toEqual(1);
        expect(v([null, 3, undefined, 2, null, 1, NaN, NaN]).count(NaN)).toEqual(2);
    });

    it('unique', () => {
        expect(v([]).unique()).toEqual([]);
        expect(v([3, 3, 3, 3, 3]).unique()).toEqual([3]);
        expect(v([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]).unique()).toEqual([1, 3, 6, 7, 12, 17]);
        expect(v([17, 12, 12, 7, 7, 6, 6, 6, 6, 3, 1]).unique()).toEqual([17, 12, 7, 6, 3, 1]);
    });
});
