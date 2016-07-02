import { Vector } from '../../src/index';


const magnitude = array => Vector.from(array).magnitude();

describe('Vector magnitude', () => {

    it('works on numbers', () => {
        expect(magnitude([1])).toBe(1);
        expect(magnitude([43, 5]).toFixed(3)).toBe('43.290');
        expect(magnitude([5, 43]).toFixed(3)).toBe('43.290');
        expect(magnitude([4,1,7,23,5,100]).toFixed(3)).toBe('103.053');
        expect(magnitude([4,1,7,-23,5,100]).toFixed(3)).toBe('103.053');
    });
});
