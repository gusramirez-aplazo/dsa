package isuniquestring

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
