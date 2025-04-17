import { SimpleLinkeListNode } from './simple-linked-list-node'

export class SingleLikedList<T> {
  private head: SimpleLinkeListNode<T> | null = null
  private length = 0

  getHead(): SimpleLinkeListNode<T> | null {
    return this.head
  }

  add(value: T): void {
    const newNode = new SimpleLinkeListNode(value)

    if (!this.head) {
      this.head = newNode
      this.length += 1
      return
    }

    let current: SimpleLinkeListNode<T> | null = this.head

    while (current?.getNext() != null) {
      current = current.getNext()
    }

    current?.setNext(newNode)

    this.length += 1
  }

  delete(value: T): void {
    if (!this.head) {
      return
    }

    if (this.head.equals(new SimpleLinkeListNode(value))) {
      this.head = this.head.getNext()
      this.length -= 1
      return
    }

    let current: SimpleLinkeListNode<T> | null = this.head

    while (current?.getNext() != null) {
      if (current?.getNext()?.equals(new SimpleLinkeListNode(value))) {
        current.setNext(current.getNext()?.getNext() ?? null)
        this.length -= 1
        return
      }

      current = current.getNext()
    }
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }
}
