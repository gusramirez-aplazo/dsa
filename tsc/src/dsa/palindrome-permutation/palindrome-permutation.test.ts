import { describe, it, expect } from 'vitest';
import { isPermutationOfPalindrome } from './palindrome-permutation';


describe('Palindrome Permutation', () => {

    it('validate simple case', ()=>{
        const input = "tact coa";
        const expected = true;
        const result = isPermutationOfPalindrome(input);

        expect(result).toBe(expected);
    })

    it('validate simple case with even computable characters', ()=>{
        const input = "ban anan ananan anab";
        const expected = true;
        const result = isPermutationOfPalindrome(input);

        expect(result).toBe(expected);
    })

    it('validate simple case with odd computable characters', ()=>{
        const input = "ban anan ao nanan anan b";
        const expected = true;
        const result = isPermutationOfPalindrome(input);

        expect(result).toBe(expected);
    })

    it('validate not palindrome permutation', ()=>{
        const input = "piketowpiket";
        const expected = false;
        const result = isPermutationOfPalindrome(input);

        expect(result).toBe(expected);
    })



});
