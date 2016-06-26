import { Vector } from '../../src/main';


const lessThan = (v1, v2) => Vector.from(v1).lessThan(v2);

describe('comparisons', () => {

    it('basic functionality', () => {
        expect(lessThan([5, -3, 10, 2], [0, 2, 13, 1]) instanceof Vector).toBe(true);
        expect(lessThan([5, -3, 10, 2], [0, 2, 13, 1])).toEqual([0, 1, 1, 0]);
    });

    it('instance identity', () => {
        let v1 = Vector.from([5, -3, 10, 2]);
        let v2 = [0, 2, 13, 1];
        let v3 = v1.lessThan(v2);
        expect(v3 !== v1 && v3 !== v2).toBe(true);
    });

});
