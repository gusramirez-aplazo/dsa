export const urlify = (str: string, originalLength: number): string => {
    const result: string[] = [];

    for( let i = originalLength - 1; i >=0; i-- ){
        if(str[i] === ' '){
            result.unshift('%20');
        }
        else{
            result.unshift(str[i]);
        }
    }

    return result.join('');
    // return str.slice(0, originalLength).replace(/\s/g, '%20');
}
