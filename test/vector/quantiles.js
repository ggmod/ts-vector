import { Vector } from '../../src/index';


const quantiles = (v, q) => Vector.from(v).quantiles(q);
const median = v => Vector.from(v).median();

describe('Quantiles', () => {

    it('basic functionality', () => {
        expect(median([])).toEqual(undefined);
        expect(median([3, 6, 7, 8, 8, 10, 13, 15, 16, 20])).toEqual(9);
        expect(median([8, 16, 8, 3, 15, 20, 6, 7, 13, 10, 9])).toEqual(9);

        expect(quantiles([3, 6, 7, 8, 8, 10, 13, 15, 16, 20], 4)).toEqual([3, 7.25, 9, 14.5, 20]);
        expect(quantiles([8, 16, 8, 3, 15, 20, 6, 7, 13, 10], 4)).toEqual([3, 7.25, 9, 14.5, 20]);
        expect(quantiles([8, 16, 8, 3, 15, 20, 6, 7, 13, 10], 4) instanceof Vector).toBe(true);
        expect(quantiles([8, 16, 8, 3, 15, 20, 6, 7, 13, 10, 9], 4)).toEqual([3, 7.5, 9, 14, 20]);
        expect(quantiles([3, 6, 7, 8, 8, 10, 13, 15, 16, 20], 9)).toEqual([3, 6, 7, 8, 8, 10, 13, 15, 16, 20]);
    });
});

