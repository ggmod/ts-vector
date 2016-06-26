import { Vector } from '../../src/main';


const stats = array => Vector.from(array).stats();

describe('stats of numeric vector', () => {

    let expected = {
        length: 11,
        invalidCount: 0,
        invalidCounts: { undefined: 0, 'null': 0, NaN: 0, Infinity: 0, '-Infinity': 0 },
        min: 1,
        max: 17,
        mode: 6,
        median: 6,
        mean: 7.545454545454546,
        std: 4.502524544378106,
        variance: 20.272727272727273,
        mad: 3.338842975206612,
        sum: 83,
        deciles: [1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]
    };

    it('basic functionality', () => {
        let result  = stats([1, 3, 6, 6, 6, 6, 7, 7, 12, 12, 17]);

        expect(result.length).toBe(expected.length);
        expect(result.invalidCount).toBe(expected.invalidCount);
        expect(result.invalidCounts).toEqual(expected.invalidCounts);
        expect(result.min).toBe(expected.min);
        expect(result.max).toBe(expected.max);
        expect(result.mode).toBe(expected.mode);
        expect(result.median).toBe(expected.median);
        expect(result.mean).toBeCloseTo(expected.mean);
        expect(result.std).toBeCloseTo(expected.std);
        expect(result.variance).toBeCloseTo(expected.variance);
        expect(result.mad).toBeCloseTo(expected.mad);
        expect(result.sum).toBe(expected.sum);
        expect(result.deciles).toEqual(expected.deciles);
    });

    it('invalid counts', () => {
        let result  = stats([1, 3, null, 6, 6, 6, undefined, undefined, 6, 7, 7, NaN, 12, NaN, 12, -Infinity, Infinity, 17]);

        expect(result.length).toBe(expected.length + 7);
        expect(result.invalidCount).toBe(7);
        expect(result.invalidCounts).toEqual({ undefined: 2, 'null': 1, Infinity: 1, '-Infinity': 1, NaN: 2 });
        expect(result.min).toBe(-Infinity);
        expect(result.max).toBe(Infinity);
        expect(result.mode).toBe(expected.mode);
        expect(result.median).toBe(expected.median);
        expect(result.mean).toBeNaN();
        expect(result.std).toBeNaN();
        expect(result.variance).toBeNaN();
        expect(result.mad).toBeNaN();
        expect(result.sum).toBeNaN();
    });
});
