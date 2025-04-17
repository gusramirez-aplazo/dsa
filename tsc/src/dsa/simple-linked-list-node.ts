export class SimpleLinkeListNode<T> {
  private value: T
  private next: SimpleLinkeListNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }

  getNext(): SimpleLinkeListNode<T> | null {
    return this.next
  }

  setNext(next: SimpleLinkeListNode<T> | null): void {
    this.next = next
  }

  getValue(): T {
    return this.value
  }

  /**
   * Compares this node with another node by value.
   * First checks hash codes for quick inequality, then compares actual values.
   */
  equals(other: SimpleLinkeListNode<T> | null): boolean {
    if (!other) return false

    // Quick check: if hash codes are different, they can't be equal.
    if (this.hashCode() !== other.hashCode()) {
      return false
    }

    // Hash codes are the same, now compare the actual values.
    // Note: For objects/arrays, this uses reference equality (===).
    // For deep equality of objects/arrays, a more complex comparison is needed.
    return this.value === other.getValue()
  }

  /**
   * Generates a hash code for the node's value
   */
  hashCode(): number {
    const value = this.value

    // Handle null and undefined
    if (value === null || value === undefined) {
      return 0
    }

    // Handle primitive types
    if (typeof value === 'number') {
      // Use Number.isInteger for robust check
      return Number.isInteger(value)
        ? value
        : this.stringHashCode(value.toString())
    }

    if (typeof value === 'boolean') {
      return value ? 1 : 0
    }

    if (typeof value === 'string') {
      return this.stringHashCode(value)
    }

    // Handle objects (including arrays)
    if (typeof value === 'object') {
      // Use JSON.stringify for consistent serialization
      return this.stringHashCode(JSON.stringify(value))
    }

    // Fallback for other types
    return this.stringHashCode(String(value))
  }

  /**
   * Implements the FNV-1a hash algorithm for strings.
   * This provides better distribution than the previous simple hash.
   */
  private stringHashCode(str: string): number {
    const FNV_OFFSET_BASIS = 0x811c9dc5 // 2166136261
    const FNV_PRIME = 0x01000193 // 16777619
    let hash = FNV_OFFSET_BASIS

    for (let i = 0; i < str.length; i++) {
      hash ^= str.charCodeAt(i)
      // Multiply by FNV prime and ensure 32-bit result using unsigned right shift
      hash = (hash * FNV_PRIME) >>> 0
    }

    // Convert final unsigned 32-bit hash to a signed 32-bit integer
    // Mimics Java's behavior where hashCode returns a signed int
    return hash | 0
  }
}
