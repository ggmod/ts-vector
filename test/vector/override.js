import { Vector } from '../../src/main';


const vec = array => Vector.from(array);

describe('Overriding existing array functions', () => {

    it('basic functionality', () => {
        expect(vec([1, 0, 1, 1]).some()).toBe(true);
        expect(vec([0, 0, 0, 0]).some()).toBe(false);
        expect(vec([1, 0, 1, 1]).every()).toBe(false);
        expect(vec([1, 1, 1, 1]).every()).toBe(true);

        expect(vec([10, 5, 6, 13]).some(x => x > 7)).toBe(true);
        expect(vec([10, 5, 6, 13]).every(x => x > 7)).toBe(false);
        expect(vec([10, 5, 6, 13]).some(x => x > 20)).toBe(false);
        expect(vec([10, 5, 6, 13]).some(x => x > 3)).toBe(true);

        expect(vec([10, 2, 3]).sort()).toEqual([2, 3, 10]);
        expect(vec([43, 12, 15, -3, 34]).sort()).toEqual([-3, 12, 15, 34, 43]);
        expect(vec([43, 12, 15, -3, 34]).sortDesc()).toEqual([43, 34, 15, 12, -3]);
    });

});
