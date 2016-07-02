import { Vector } from '../../src/index';


const std = array => Vector.from(array).std();

describe('Standard deviation', () => {

    it('works on numbers', () => {
        expect(std([4,1,7,23,5,80]).toFixed(3)).toBe('30.397');
    });
});
