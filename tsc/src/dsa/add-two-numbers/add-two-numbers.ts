export class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let total = 0
  let carry = 0

  let current = new ListNode(0)
  const result = current

  while (l1 || l2 || carry) {
    total = carry
    if (l1) {
      total += l1.val
      l1 = l1.next
    }

    if (l2) {
      total += l2.val
      l2 = l2.next
    }

    carry = (total / 10) | 0
    current.next = new ListNode(total % 10)
    current = current.next
  }

  return result.next
}
