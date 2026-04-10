export class BitVector {
    readonly #words: Uint32Array;

    constructor(size: number){
        this.#words = new Uint32Array(Math.ceil(size / 32));
    }

    set(index: number): void {
        /*
          Shifting right by 5 is equivalent to dividing by 2^5 (which is 32)
          and throwing away the remainder.
        */
        const wordIndex = index >>> 5;

        /*
            The number 31 in binary is 00011111. Performing a bitwise AND with 31
            masks out everything except the lowest 5 bits. This is a high performance
            way to do index % 32.
        */
        const bitIndex = index & 31;

        /**
         * Create a mask for the bitIndex bit by shifting 1 to the left by bitIndex positions.
         */
        const mask = 1 << bitIndex;

        /**
         * Use a bitwise OR to set the bit at the specified index in the appropriate word. The OR operation
         * ensures that the existing bits in the word are preserved, and only the bit at the specified index is set to 1.
         */
        this.#words[wordIndex] |= mask;
    }


    get(index: number): boolean {
        const wordIndex = index >>> 5;
        const bitIndex = index & 31;
        const mask = 1 << bitIndex;

        return (this.#words[wordIndex] & mask) !== 0;
    }

    clear(index: number): void {
        const wordIndex = index >>> 5;
        const bitIndex = index & 31;
        const mask = ~(1 << bitIndex);

        this.#words[wordIndex] &= mask;
    }

    toggle(index: number): void {
        const wordIndex = index >>> 5;
        const bitIndex = index & 31;
        const mask = 1 << bitIndex;

        this.#words[wordIndex] ^= mask;
    }

}
