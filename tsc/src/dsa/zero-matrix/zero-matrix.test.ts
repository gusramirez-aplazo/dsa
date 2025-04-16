import { describe, expect, it } from 'vitest'
import { zeroMatrix } from './zero-matrix'

describe('zeroMatrix', () => {
  it('should return a matrix with all rows and columns set to 0 if any cell contains a 0', () => {
    const input = [
      [2, 1, 3, 0, 2],
      [7, 4, 1, 3, 8],
      [4, 0, 1, 2, 1],
      [9, 3, 4, 1, 9],
    ]

    const output = [
      [0, 0, 0, 0, 0],
      [7, 0, 1, 0, 8],
      [0, 0, 0, 0, 0],
      [9, 0, 4, 0, 9],
    ]

    expect(zeroMatrix(input)).toEqual(output)
  })
})
