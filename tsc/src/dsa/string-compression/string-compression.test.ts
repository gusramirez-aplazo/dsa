import { describe, it, expect } from 'vitest'
import { compressString } from './string-compression'

describe('String Compression', () => {
  it('validate simple string compression', () => {
    const input = 'aabcccccaaa'
    const expectedOutput = 'a2b1c5a3'

    expect(compressString(input)).toBe(expectedOutput)
  })

  it('validate string compression with no compression', () => {
    const input = 'original'
    const expectedOutput = 'original'

    expect(compressString(input)).toBe(expectedOutput)
  })

  it('validate string compression with single characters', () => {
    const input = 'mississippiiiiiiiii'
    const expectedOutput = 'm1i1s2i1s2i1p2i9'

    expect(compressString(input)).toBe(expectedOutput)
  })
})
