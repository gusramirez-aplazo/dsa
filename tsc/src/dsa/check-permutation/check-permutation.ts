export const isPermutationOf = ({
base, compare
}: { base: string, compare: string }): boolean => {
    if (base.length !== compare.length){
        return false;
    }

    const charMap: Record<string, number> = {};

    for (const char of base) {
        charMap[char] = (charMap[char] ?? 0) + 1;
    }

    for (const char of compare) {
        if (!charMap[char]) {
            return false;
        }

        charMap[char] -= 1;
    }

    return true;
}
