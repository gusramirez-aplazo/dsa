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
}
