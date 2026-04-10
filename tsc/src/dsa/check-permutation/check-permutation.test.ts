import { describe, expect, it } from 'vitest';
import { isPermutationOf } from './check-permutation';

describe('isPermutationOf', () => {
    it('validates permutation for simple case', () => {
        const base = 'banana';
        const compare = 'abaann';

        expect(isPermutationOf({ base, compare })).toBe(true);
    })

    it('validates permutation for case with spaces', () => {
        const base = 'a b c';
        const compare = 'c b a';

        expect(isPermutationOf({ base, compare })).toBe(true);
    });

    it('validates permutation for complex case', () => {
        const base = 'This is a really long string with spaces and punctuation!';
        const compare = '!punctuation is This long really a spaces and string with';

        expect(isPermutationOf({ base, compare })).toBe(true);
    });

    it('invalidates non-permutation', () => {
        const base = 'hello';
        const compare = 'world';

        expect(isPermutationOf({ base, compare })).toBe(false);
    });

})
