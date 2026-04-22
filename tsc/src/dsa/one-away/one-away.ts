export const oneAway = (str1: string, str2: string): boolean => {
  let pointer1 = 0
  let pointer2 = 0
  let diff = 0

  while (pointer1 < str1.length || pointer2 < str2.length) {
    if (str1[pointer1] !== str2[pointer2]) {
      diff++
      if (str1.length > str2.length) {
        pointer1++
      } else if (str1.length < str2.length) {
        pointer2++
      } else {
        pointer1++
        pointer2++
      }
    } else {
      pointer1++
      pointer2++
    }

    if (diff > 1) return false
  }

  return true
}
