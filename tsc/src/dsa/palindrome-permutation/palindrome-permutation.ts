export const isPermutationOfPalindrome = (sentence: string): boolean =>{
    const charCount: Record<string, number> = {};
    let charsCount = 0

    for (const char of sentence) {
        if (char === ' '){
            continue;
        }

        charsCount++;

        const lowerChar = char.toLocaleLowerCase();


        if(!charCount[lowerChar]){
            charCount[lowerChar] = 1;
        } else {
            charCount[lowerChar]--;
        }
    }

    const remainingChars = Object.values(charCount).filter(count => count !== 0);
    const isEven = charsCount % 2 === 0;

    if(isEven){
        return remainingChars.length === 0;
    }

    return remainingChars.length === 1;
}
