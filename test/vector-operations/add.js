import { Vector } from '../../src/main';


const add = (v1, v2) => Vector.from(v1).add(v2);
const addSelf = (v1, v2) => Vector.from(v1).addSelf(v2);

describe('adding vectors', () => {

    it('basic functionality', () => {
        expect(add([11, 3, -14], [4, -5, 61]) instanceof Vector).toBe(true);
        expect(add([11, 3, -14], [4, -5, 61])).toEqual([15, -2, 47]);
        expect(add([11, 3, -14], 3)).toEqual([14, 6, -11]);

        expect(addSelf([11, 3, -14], [4, -5, 61]) instanceof Vector).toBe(true);
        expect(addSelf([11, 3, -14], [4, -5, 61])).toEqual([15, -2, 47]);
        expect(addSelf([11, 3, -14], 3)).toEqual([14, 6, -11]);
    });

    it('instance identity', () => {
        let v1 = Vector.from([11, 3, -14]);
        let v2 = [4, -5, 61];
        let v3 = v1.add(v2);
        expect(v3 !== v1 && v3 !== v2).toBe(true);

        let v4 = v1.addSelf(v2);
        expect(v4 === v1).toBe(true);
    });

    it('errors', () => {
        expect(() => add([11, 3, -14], [4, -5])).toThrow();
        expect(() => add([11, 3, -14], ['4', -5, 61])).toThrow();
        expect(() => add(['11', 3, -14], [4, -5, 61])).toThrow();
        expect(() => add([11, 3, -14], '5')).toThrow();
    });

    it('missing values', () => {
        expect(add([11, 3, undefined], [4, null, 61]).toString()).toEqual([15, NaN, NaN].toString());
    });

    it('friend functions', () => {
        expect(Vector.add(2, 3)).toBe(5);
        expect(Vector.add(3, [4, -5, 61])).toEqual([7, -2, 64]);
        expect(Vector.add(3, [4, -5, 61]) instanceof Vector).toBe(true);
        expect(Vector.add([11, 3, -14], 3)).toEqual([14, 6, -11]);
        expect(Vector.add([11, 3, -14], 3) instanceof Vector).toBe(true);
        expect(Vector.add([11, 3, -14], [4, -5, 61])).toEqual([15, -2, 47]);
        expect(Vector.add([11, 3, -14], [4, -5, 61]) instanceof Vector).toBe(true);

        expect(() => Vector.add([11, 3, -14], [4, -5])).toThrow();
    });
});
