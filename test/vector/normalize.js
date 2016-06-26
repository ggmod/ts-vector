import { Vector } from '../../src/main';


const normStats = v => Vector.from(v).normalizeStats();
const normProba = v => Vector.from(v).normalizeProba();
const normVector = v => Vector.from(v).normalizeVector();

describe('Normalizations', () => {

    it('basic functionality', () => {
        expect(normProba([2, 7, 5, 2])).toEqual([0.125, 0.4375, 0.3125, 0.125]);
        expect(normVector([2, 7, 5, 2]).sumOfSquares()).toEqual(1);
        expect(normStats([2, 7, 5, 2]).mean()).toBeCloseTo(0);
        expect(normStats([2, 7, 5, 2]).std()).toEqual(1);
    });

});
