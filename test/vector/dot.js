import { Vector } from '../../src/index';


const dot = (v1, v2) => Vector.from(v1).dot(v2);

describe('dot product', () => {

    it('basic functionality', () => {
        expect(dot([1, 3, -5], [4, -2, -1])).toEqual(3);
    });

    it('errors', () => {
        expect(() => dot([11, 3, -14], [4, -5])).toThrow();
        expect(() => dot([11, 3, -14], ['4', -5, 61])).toThrow();
        expect(() => dot(['11', 3, -14], [4, -5, 61])).toThrow();
    });

    it('missing values', () => {
        expect(dot([11, 3, undefined], [4, null, 61])).toBeNaN();
    });

});
