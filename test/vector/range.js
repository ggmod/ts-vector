import { Vector } from '../../src/index';


describe('Static constructors', () => {

    it('range', () => {
        expect(Vector.range(5)).toEqual([0, 1, 2, 3, 4]);
        expect(Vector.range(-3)).toEqual([0, -1, -2]);
        expect(Vector.range(3, 6)).toEqual([3, 4, 5]);
        expect(Vector.range(4, 10, 2)).toEqual([4, 6, 8]);
        expect(Vector.range(0, -10, -2)).toEqual([0, -2, -4, -6, -8]);
        expect(Vector.range(0, -5)).toEqual([0, -1, -2, -3, -4]);
        expect(Vector.range(-2, -10, -2)).toEqual([-2, -4, -6, -8]);
        expect(Vector.range(-4, -1)).toEqual([-4, -3, -2]);
        expect(Vector.range(-4, -1, 2)).toEqual([-4, -2]);
        expect(Vector.range(null, 3)).toEqual([0, 1, 2]);
        expect(Vector.range(null, 5, 2)).toEqual([0, 2, 4]);
        expect(Vector.range(null, -3)).toEqual([0, -1, -2]);
        expect(Vector.range(null, -5, -2)).toEqual([0, -2, -4]);

        expect(Vector.range(0, 0.3, 0.1)).toEqual([0.0, 0.1, 0.2]);

        expect(Vector.range(2, 3) instanceof Vector).toBe(true);

        // avoid infinite loops:
        expect(() => Vector.range(0, 3, -1)).toThrow();
        expect(() => Vector.range(0, -3, 1)).toThrow();
    });

    it('linspace', () => {
        expect(Vector.linspace(2, 3, 5)).toEqual([2, 2.25, 2.5, 2.75, 3]);
        expect(Vector.linspace(2, 3, 5, true)).toEqual([2, 2.2, 2.4, 2.6, 2.8]);
        expect(Vector.linspace(-3, -2, 5)).toEqual([-3, -2.75, -2.5, -2.25, -2]);
        expect(Vector.linspace(-3, -2, 5, true)).toEqual([-3, -2.8, -2.6, -2.4, -2.2]);

        expect(Vector.linspace(3, 2, 5)).toEqual([3, 2.75, 2.5, 2.25, 2]);
        expect(Vector.linspace(3, 2, 5, true)).toEqual([3, 2.8, 2.6, 2.4, 2.2]);
        expect(Vector.linspace(-2, -3, 5)).toEqual([-2, -2.25, -2.5, -2.75, -3]);
        expect(Vector.linspace(-2, -3, 5, true)).toEqual([-2, -2.2, -2.4, -2.6, -2.8]);

        expect(Vector.linspace(2, 3).length).toEqual(100);
        expect(Vector.linspace(2, 3) instanceof Vector).toBe(true);
    });

    let logspace = (start, stop, num, excludeEnd, base) => Vector.logspace(start, stop, num, excludeEnd, base)
        .map(x => Math.round(x * 1000) / 1000);

    it('logspace', () => {
        expect(logspace(2, 3, 4)).toEqual([100, 215.443, 464.159, 1000]);
        expect(logspace(2, 3, 4, true)).toEqual([ 100, 177.828, 316.228, 562.341]);
        expect(logspace(-2, -3, 4)).toEqual([0.01, 0.005, 0.002, 0.001]);
        expect(logspace(-2, -3, 4, true)).toEqual([0.01, 0.006, 0.003, 0.002]);

        expect(logspace(3, 2, 4)).toEqual([1000, 464.159, 215.443, 100]);
        expect(logspace(3, 2, 4, true)).toEqual([1000, 562.341, 316.228, 177.828]);
        expect(logspace(-3, -2, 4)).toEqual([0.001, 0.002, 0.005, 0.01]);
        expect(logspace(-3, -2, 4, true)).toEqual([0.001, 0.002, 0.003, 0.006]);

        expect(logspace(2, 3, 4, false, 2)).toEqual([4, 5.040, 6.350, 8]);

        expect(Vector.logspace(2, 3).length).toEqual(100);
        expect(Vector.logspace(2, 3) instanceof Vector).toBe(true);
    });
});
