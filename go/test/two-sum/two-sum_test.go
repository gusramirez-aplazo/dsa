package twosum_test

import (
	"testing"

	twosum "github.com/gusramirez-aplazo/dsa/go/internal/two-sum"
)

func TestTwoSum(t *testing.T) {
	nums := []int{9, 2, 5, 6}
	target := 7

	result := twosum.Exec(nums, target)

	if result == nil {
		t.Errorf("Expected result to be non-nil")
	}

	if len(result) != 2 {
		t.Errorf("Expected result to have length 2")
	}

	if result[0] != 1 || result[1] != 2 {
		t.Errorf("Expected result to be [1, 2]")
	}
}

func TestTwoSum_WithNullResult(t *testing.T) {
	nums := []int{1, 2, 3, 4, 5}
	target := 10

	result := twosum.Exec(nums, target)

	t.Logf("result: %v", result)

	if result != nil {
		t.Errorf("Expected result to be nil")
	}

	if len(result) != 0 {
		t.Errorf("Expected result to have length 0")
	}
}
