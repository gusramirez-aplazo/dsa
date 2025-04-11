package anagram

import (
	"strconv"
	"strings"
)

// Exec groups anagrams from an array of strings.
// An anagram is a word formed by rearranging the letters of another word. E.g.: "earth" - "heart"
//
// Example:
// Input: words = ["earth", "arrest", "program", "traces", "heart"]
// Output: [["earth", "heart"], ["arrest", "traces"], ["program"]]
//
// Returns an array of grouped anagrams. Any order is valid.
func Exec(words []string) [][]string {
	if len(words) == 0 {
		return [][]string{}
	}

	groups := buildGroup(words)

	return groups
}

func buildGroup(words []string) [][]string {
	groups := make(map[string][]string)

	for _, word := range words {
		hash := hashWord(word)

		groups[hash] = append(groups[hash], word)
	}

	result := make([][]string, 0, len(groups))

	for _, group := range groups {
		result = append(result, group)
	}

	return result
}

func hashWord(word string) string {
	hash := [26]int{}

	for _, char := range word {
		index := int(char - 'a')

		hash[index]++
	}

	var builder strings.Builder

	for _, num := range hash {
		builder.WriteString(strconv.Itoa(num))
	}

	return builder.String()
}
