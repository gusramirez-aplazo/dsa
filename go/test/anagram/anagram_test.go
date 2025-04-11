package anagram_test

import (
	"testing"

	"github.com/gusramirez-aplazo/dsa/go/internal/anagram"
)

func TestAnagrams(t *testing.T) {
	words := []string{"earth", "carest", "program", "traces", "heart"}

	groups := anagram.Exec(words)

	if len(groups) != 3 {
		t.Errorf("Expected 3 groups, got %d", len(groups))
	}

	if len(groups[0]) != 2 {
		t.Errorf("Expected 2 words in group 0, got %d", len(groups[0]))
	}

	if len(groups[1]) != 2 {
		t.Errorf("Expected 2 words in group 1, got %d", len(groups[1]))
	}

	if len(groups[2]) != 1 {
		t.Errorf("Expected 1 word in group 2, got %d", len(groups[2]))
	}

	if groups[0][0] != "earth" || groups[0][1] != "heart" {
		t.Errorf("Expected 'earth' and 'heart' in group 0, got %v and %v", groups[0][0], groups[0][1])
	}

	if groups[1][0] != "carest" || groups[1][1] != "traces" {
		t.Errorf("Expected 'carest' and 'traces' in group 1, got %v and %v", groups[1][0], groups[1][1])
	}

	if groups[2][0] != "program" {
		t.Errorf("Expected 'program' in group 2, got %v", groups[2][0])
	}
}
