/**
 * Groups anagrams from an array of strings.
 * An anagram is a word formed by rearranging the letters of another word. E.g.: "earth" - "heart"
 *
 * @param words - Array of strings to group
 * @returns Array of grouped anagrams. Any order is valid.
 *
 * @example
 * Input: words = ["earth", "arrest", "program", "traces", "heart"]
 * Output: [["earth", "heart"], ["carest", "traces"], ["program"]]
 */
export const groupAnagrams = (words: string[]): string[][] => {
  if (!words || !Array.isArray(words) || words.length === 0) {
    return []
  }

  const group = buildGroup(words)

  return group.map((words) => words.sort())
}

const buildGroup = (words: string[]) => {
  const group: Record<string, string[]> = {}

  for (let word of words) {
    const hash = getWordHash(word)

    if (!group[hash]) {
      group[hash] = []
    }

    group[hash].push(word)
  }

  return Object.values(group)
}

const getWordHash = (word: string): string => {
  const charsCount: number[] = new Array(26).fill(0)

  for (let i = 0; i < word.length; i++) {
    const char = word.charCodeAt(i) - 'a'.charCodeAt(0)
    charsCount[char]++
  }

  return charsCount.join('')
}
