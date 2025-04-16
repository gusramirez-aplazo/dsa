/**
 * 💡 Zero Matrix
 *
 * Given a matrix of integers, write an algorithm that sets **entire rows and columns to 0**
 * if any cell in that row or column contains a **0**.
 *
 * 📋 Rules:
 * - If a cell contains `0`, then **all** the elements in its row and column must be set to `0`.
 *
 * 📌 Example:
 *
 * Input Matrix:
 *   2  1  3  0  2
 *   7  4  1  3  8
 *   4  0  1  2  1
 *   9  3  4  1  9
 *
 * Output Matrix:
 *   0  0  0  0  0
 *   7  0  1  0  8
 *   0  0  0  0  0
 *   9  0  4  0  9
 */
export const zeroMatrix = (matrix: number[][]): number[][] => {
  const hasFirstRowZeros = hasFirstRowZero(matrix)
  const hasFirstColumnZeros = hasFirstColumnZero(matrix)

  markZeroColAndRow(matrix)

  loopRowsAndSetZero(matrix)
  loopColumnsAndSetZero(matrix)

  if (hasFirstRowZeros) {
    setRowToZero(matrix, 0)
  }

  if (hasFirstColumnZeros) {
    setColumnToZero(matrix, 0)
  }

  console.warn(matrix)

  return matrix
}

export const hasFirstRowZero = (matrix: number[][]): boolean => {
  const firstRow = matrix[0]

  for (let i = 0; i < firstRow.length; i++) {
    if (firstRow[i] === 0) {
      return true
    }
  }

  return false
}

export const hasFirstColumnZero = (matrix: number[][]): boolean => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      return true
    }
  }

  return false
}

export const markZeroColAndRow = (matrix: number[][]): void => {
  // loop from 1 to avoid overwriting the first row and column
  for (let row = 1; row < matrix.length; row++) {
    for (let column = 1; column < matrix[0].length; column++) {
      if (matrix[row][column] === 0) {
        matrix[row][0] = 0
        matrix[0][column] = 0
      }
    }
  }
}

export const setRowToZero = (matrix: number[][], row: number): void => {
  for (let column = 0; column < matrix[0].length; column++) {
    matrix[row][column] = 0
  }
}

export const setColumnToZero = (matrix: number[][], column: number): void => {
  for (let row = 0; row < matrix.length; row++) {
    matrix[row][column] = 0
  }
}

export const loopRowsAndSetZero = (matrix: number[][]) => {
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      setRowToZero(matrix, row)
    }
  }
}

export const loopColumnsAndSetZero = (matrix: number[][]) => {
  for (let column = 0; column < matrix[0].length; column++) {
    if (matrix[0][column] === 0) {
      setColumnToZero(matrix, column)
    }
  }
}
