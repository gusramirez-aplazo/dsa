import { describe, it, expect } from 'vitest'
import { addTwoNumbers, ListNode } from './add-two-numbers'

describe('addTwoNumbers', () => {
  it('validate simple case', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    const result = addTwoNumbers(l1, l2)

    expect(result).toEqual(new ListNode(7, new ListNode(0, new ListNode(8))))
  })

  it('validate different lengths', () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
        ),
      ),
    )
    const l2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9))),
    )
    const result = addTwoNumbers(l1, l2)

    expect(result).toEqual(
      new ListNode(
        8,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                0,
                new ListNode(0, new ListNode(0, new ListNode(1))),
              ),
            ),
          ),
        ),
      ),
    )
  })
})
