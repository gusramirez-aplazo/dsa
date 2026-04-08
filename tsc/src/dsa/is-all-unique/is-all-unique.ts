export const isAllUnique = (str: string): boolean => {
    const charSet = new Set<string>();


    for( const char of str ) {
        if(charSet.has(char)){
            return false;
        }

        charSet.add(char);
    }

    return true;
}
