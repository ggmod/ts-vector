import { Vector } from '../../src/index';


const mad = array => Vector.from(array).mad();

describe('Mean absolute deviation', () => {

    it('works on numbers', () => {
        expect(mad([4,1,7,23,5,80])).toBe(21);
    });
});
