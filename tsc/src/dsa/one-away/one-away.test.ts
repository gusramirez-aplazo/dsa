import { describe, it, expect } from 'vitest'
import { oneAway } from './one-away'

describe('oneAway', () => {
  it('validate simples case removing one character', () => {
    const str1 = 'pale'
    const str2 = 'ple'
    const result = oneAway(str1, str2)
    expect(result).toBe(true)
  })

  it('validate simple case adding one character', () => {
    const str1 = 'pale'
    const str2 = 'pales'
    const result = oneAway(str1, str2)
    expect(result).toBe(true)
  })

  it('validate simple case replacing one character', () => {
    const str1 = 'pale'
    const str2 = 'bale'
    const result = oneAway(str1, str2)
    expect(result).toBe(true)
  })

  it('validate simple case with more than one edit', () => {
    const str1 = 'pale'
    const str2 = 'bake'
    const result = oneAway(str1, str2)
    expect(result).toBe(false)
  })

  it('validate simple case with identical strings', () => {
    const str1 = 'pale'
    const str2 = 'pale'
    const result = oneAway(str1, str2)
    expect(result).toBe(true)
  })
})
