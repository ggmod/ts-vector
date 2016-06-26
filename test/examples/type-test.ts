import { Vector } from '../../src/main';


describe('Type safety test', () => {

    it('examples', () => {

        let v1 = <Vector>Vector.from([4, -1, 2]);
        let v2 = <Vector>Vector.from([3, 2, -6]);

        let x1 = v1.add(v2).multiply(2).sum();

        expect(x1).toBe(8)
    });
});


