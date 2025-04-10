import { describe, expect, it } from 'vitest'
import { groupAnagrams } from './anagram'

describe('Group Anagrams', () => {
  it('should group anagrams', () => {
    const words = ['earth', 'carest', 'program', 'traces', 'heart']
    const result = groupAnagrams(words)

    expect(result).toEqual([
      ['earth', 'heart'],
      ['carest', 'traces'],
      ['program'],
    ])
  })
})
