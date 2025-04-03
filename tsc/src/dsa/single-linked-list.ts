import { SimpleLinkeListNode } from './simple-linked-list-node'

export class SingleLikedList<T> {
  private head: SimpleLinkeListNode<T> | null = null
  private next: SimpleLinkeListNode<T> | null = null
  private length = 0

  getHead(): SimpleLinkeListNode<T> | null {
    return this.head
  }

  getNext(): SimpleLinkeListNode<T> | null {
    return this.next
  }

  add(value: T): void {
    const newNode = new SimpleLinkeListNode(value)

    if (!this.head) {
      this.head = newNode
    } else {
      this.head.setNext(newNode)
    }

    this.length += 1
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }
}
