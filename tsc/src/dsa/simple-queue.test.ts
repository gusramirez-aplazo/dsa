import { beforeEach, describe, expect, it } from 'vitest'
import { SimpleQueue } from './simple-queue'

describe('SimpleQueue', () => {
  let queue: SimpleQueue<number>

  beforeEach(() => {
    queue = new SimpleQueue<number>()

    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
  })

  it('should enqueue values', () => {
    expect(queue.size()).toBe(4)
  })

  it('should dequeue values', () => {
    expect(queue.dequeue()).toBe(1)
    expect(queue.size()).toBe(3)
  })

  it('should peek values', () => {
    expect(queue.peek()).toBe(1)

    queue.dequeue()
    queue.dequeue()

    expect(queue.peek()).toBe(3)
  })
})
