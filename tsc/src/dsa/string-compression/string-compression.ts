export const compressString = (str: string): string => {
  let it = 0,
    curr = 0,
    step = 1
  let output = ''

  while (it < str.length) {
    if (str[curr] === str[curr + step]) {
      step += 1
    } else {
      output += str[curr] + String(step)
      curr += step
      step = 1
    }

    it += 1

    if (output.length > str.length) {
      return str
    }
  }

  return output
}
