import { describe, it, expect } from 'vitest';
import { urlify } from './urlify';

describe('urlify', ()=>{

    it('validate simple urlify', ()=> {
        const str = 'Mr John Smith    ';
        const originalLength = 13;
        const result = 'Mr%20John%20Smith';
        expect(urlify(str, originalLength)).toBe(result);
    })
})
