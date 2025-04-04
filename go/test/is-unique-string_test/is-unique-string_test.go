package isuniquestring_test

import (
	"testing"

	isuniquestring "github.com/gusramirez-aplazo/dsa/go/internal/is-unique-string"
)

func TestIsUniqueString(t *testing.T) {
	word := "abcde"

	result := isuniquestring.Exec(word)

	if !result {
		t.Errorf("Expected %s to be unique", word)
	}
}

func TestIsUniqueString_WithNonUniqueCharacters(t *testing.T) {
	word := "abcede"

	result := isuniquestring.Exec(word)

	if result {
		t.Errorf("Expected %s to not be unique", word)
	}
}
