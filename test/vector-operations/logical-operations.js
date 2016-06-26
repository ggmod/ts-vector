import { Vector } from '../../src/main';


const and = (v1, v2) => Vector.from(v1).and(v2);
const or = (v1, v2) => Vector.from(v1).or(v2);

describe('logical and/or on vectors', () => {

    it('basic functionality', () => {
        expect(and([1, 0, 1], [0, 1, 1]) instanceof Vector).toBe(true);
        expect(and([1, 0, 1], [0, 1, 1])).toEqual([0, 0, 1]);
        expect(or([1, 0, 1], [0, 1, 1]) instanceof Vector).toBe(true);
        expect(or([1, 0, 1], [0, 1, 1])).toEqual([1, 1, 1]);
    });

    it('instance identity', () => {
        let v1 = Vector.from([0, 1, 1]);
        let v2 = [1, 1, 0];
        let v3 = v1.and(v2);
        let v4 = v1.or(v2);
        expect(v3 !== v1 && v3 !== v2).toBe(true);
        expect(v4 !== v1 && v4 !== v2).toBe(true);
    });

});
