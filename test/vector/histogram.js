import { Vector } from '../../src/main';


const histogram = (v, options) => Vector.from(v).histogram(options);

describe('Histogram', () => {

    it('basic functionality', () => {
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1])).toEqual({
            x: [-2, 0, 2, 4],
            dx: 2,
            y: [2, 7, 5, 2]
        });
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { probability: true })).toEqual({
            x: [-2, 0, 2, 4],
            dx: 2,
            y: [0.125, 0.4375, 0.3125, 0.125]
        });
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { bins: 8 })).toEqual({
            x: [-2, -1, 0, 1, 2, 3, 4, 5],
            dx: 1,
            y: [1, 1, 3, 4, 2, 3, 0, 2]
        });
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { binWidth: 1 })).toEqual({
            x: [-2, -1, 0, 1, 2, 3, 4, 5],
            dx: 1,
            y: [1, 1, 3, 4, 2, 3, 0, 2]
        });
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { bins: 8, probability: true })).toEqual({
            x: [-2, -1, 0, 1, 2, 3, 4, 5],
            dx: 1,
            y: [0.0625, 0.0625, 0.1875, 0.25, 0.125, 0.1875, 0, 0.125]
        });
        expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { binWidth: 1, min: 0 })).toEqual({
            x: [0, 1, 2, 3, 4, 5],
            dx: 1,
            y: [3, 4, 2, 3, 0, 2]
        });
        // TODO should the max value be exclusive if it's overwritten in the options?
        //expect(histogram([-2, 5, 3, 2, 1, 1, 6, 0, 3, 2, -1, 1, 3, 0, 0, 1], { binWidth: 1, max: 3 })).toEqual({
        //    x: [-2, -1, 0, 1, 2],
        //    dx: 1,
        //    y: [1, 1, 3, 4, 2]
        //});
    });
});

