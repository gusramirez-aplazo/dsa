import { describe, expect, it } from 'vitest'
import { twoSum } from './two-sum'

describe('twoSum', () => {
  it('should return the indices of the two numbers that add up to the target 0,1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    const result = twoSum(nums, target)
    expect(result).toEqual([0, 1])
  })

  it('should return null if no two numbers add up to the target', () => {
    const nums = [2, 7, 11, 15]
    const target = 10
    const result = twoSum(nums, target)
    expect(result).toBeNull()
  })

  it('should return the indices of the two numbers that add up to the target 1,2', () => {
    const nums = [9, 2, 5, 6]
    const target = 7

    const result = twoSum(nums, target)
    expect(result).toEqual([1, 2])
  })
})
