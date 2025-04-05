/** Given an array of integers and a target value, returns the indices
 * of two numbers such that they add up to the target.
 *
 * You may assume that there is exactly one solution.
 *
 * @param {number[]} nums - The array of integers
 * @param {number} target - The target sum
 * @returns {number[] | null} - Array containing the indices of the two numbers, or null if no solution exists
 *
 * @example
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: nums[0] + nums[1] = 2 + 7 = 9
 *
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 */
export const twoSum = (nums: number[], target: number): number[] | null => {
  const toSum: Record<number, number> = {}
  const result: number[] = []

  nums.forEach((num, index) => {
    if (toSum[num] == null) {
      toSum[num] = index
    }

    const complement = target - num

    if (toSum[complement] != null) {
      result.push(toSum[complement], index)
    }
  })

  return result.length > 0 ? result : null
}
