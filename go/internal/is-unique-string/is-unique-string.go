package isuniquestring

// Exec determines if a string has all unique characters.
// It returns true if all characters are unique, false otherwise.
//
// Example:
//
//	Exec("abc") // returns true
//	Exec("aba") // returns false
func Exec(str string) bool {
	store := make(map[byte]struct{})

	for i := 0; i < len(str); i++ {
		c := str[i]

		_, exists := store[c]

		if exists {
			return false
		}

		store[c] = struct{}{}

	}

	return true
}
