import { Vector } from '../../src/main';


const cumsum = v => Vector.from(v).cumsum();
const diff = v => Vector.from(v).diff();

describe('cumsum/diff', () => {

    it('basic functionality', () => {
        expect(cumsum([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 6, 10, 15, 21]);
        expect(diff([1, 2, 4, 7, 0])).toEqual([1, 2, 3, -7]);
    });

});
