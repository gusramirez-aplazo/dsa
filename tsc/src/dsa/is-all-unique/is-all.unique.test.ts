import { describe, it, expect } from 'vitest';
import { isAllUnique } from './is-all-unique';

describe('is all unique', ()=>{

    it('validate happy path', ()=>{
        const str = 'abcdefghijklmnopqrstu';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate with duplicates', ()=>{
        const str = 'abcdeafghijklmnopqrstu';

        expect(isAllUnique(str)).toBeFalsy();
    });

    it('validate empty string', ()=>{
        const str = '';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate string with one character', ()=>{
        const str = 'a';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate string with all same characters', ()=>{
        const str = 'aaaaaa';

        expect(isAllUnique(str)).toBeFalsy();
    });

    it('validate string with special characters', ()=>{
        const str = 'abcde!@#$%^&*()_+';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate string with unicode characters', ()=>{
        const str = 'abcde😀fghijklmnopqrstu';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate string with duplicate unicode characters', ()=>{
        const str = 'abcde😀fghijklmnopqrstu😀';

        expect(isAllUnique(str)).toBeFalsy();

    });

    it('validate string with spaces', ()=>{
        const str = 'abcde fghijklmnopqrstu';

        expect(isAllUnique(str)).toBeTruthy();
    });

    it('validate string with duplicate spaces', ()=>{
        const str = 'abcde  fghijklmnopqrstu';

        expect(isAllUnique(str)).toBeFalsy();
    });

    it('validate a really long string', ()=>{
        const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:\'",.<>/?`~';

        expect(isAllUnique(str)).toBeTruthy();
    });
});
