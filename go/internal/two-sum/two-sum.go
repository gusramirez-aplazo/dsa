package twosum

// Exec takes an array of integers and a target value, and returns the indices
// of two numbers such that they add up to the target.
//
// You may assume that there is exactly one solution.
//
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9
//
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
func Exec(nums []int, target int) []int {
	toSum := make(map[int]int)
	result := make([]int, 0, 2)

	for idx, num := range nums {
		toSum[num] = idx

		complement := target - num
		stored, exists := toSum[complement]

		if exists && toSum[num] != stored {
			result = append(result, stored, toSum[num])
		}
	}

	if len(result) == 0 {
		return nil
	}

	return result
}
