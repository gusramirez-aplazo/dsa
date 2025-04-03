import { SimpleLinkeListNode } from './simple-linked-list-node'

export class SimpleQueue<T> {
  private first: SimpleLinkeListNode<T> | null = null
  private last: SimpleLinkeListNode<T> | null = null
  private length = 0

  enqueue(value: T): void {
    const newNode = new SimpleLinkeListNode(value)

    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last?.setNext(newNode)
      this.last = newNode
    }

    this.length += 1
  }

  dequeue(): T | null {
    if (this.isEmpty()) {
      return null
    }

    const toRemove = this.first

    this.first = this.first?.getNext() ?? null
    this.length -= 1

    if (this.length === 0) {
      this.last = null
    }

    return toRemove?.getValue() ?? null
  }

  peek(): T | null {
    return this.first?.getValue() ?? null
  }

  isEmpty(): boolean {
    return this.length === 0
  }

  size(): number {
    return this.length
  }

  toString(): string {
    let current = this.first
    const values: T[] = []

    while (current !== null) {
      const value = current.getValue()
      if (
        typeof value === 'object' &&
        value !== null &&
        ('getValue' in value || 'value' in value)
      ) {
        if ('getValue' in value && typeof value.getValue === 'function') {
          const getValue = value.getValue()
          if (getValue !== undefined) {
            values.push(value.getValue() as T)
          }
        } else if ('value' in value) {
          values.push(value.value as T)
        }
      } else {
        values.push(value)
      }
      current = current.getNext()
    }

    return values.join(' -> ')
  }
}

export function cloneQueue<T>(queue: SimpleQueue<T>): SimpleQueue<T> {
  const clonedQueue = new SimpleQueue<T>()

  // Store original items to restore them later
  const tempItems: T[] = []

  // Dequeue all items from original queue and save them
  while (!queue.isEmpty()) {
    const item = queue.dequeue()
    if (item !== null) {
      tempItems.push(item)
    }
  }

  // Restore original queue and populate cloned queue
  for (const item of tempItems) {
    queue.enqueue(item)
    clonedQueue.enqueue(item)
  }

  return clonedQueue
}
