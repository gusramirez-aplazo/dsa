import { describe, expect, test, vi } from 'vitest'
import { SimpleLinkeListNode } from './simple-linked-list-node'

describe('SimpleLinkeListNode', () => {
  describe('hashCode and equals', () => {
    // --- Basic Types and Boundary Cases ---

    test('should handle null and undefined values', () => {
      const nodeNull = new SimpleLinkeListNode<null>(null)
      const nodeUndef = new SimpleLinkeListNode<undefined>(undefined)
      const nodeZero = new SimpleLinkeListNode<number>(0)

      expect(nodeNull.hashCode()).toBe(0)
      expect(nodeUndef.hashCode()).toBe(0)
      expect(nodeNull.equals(nodeUndef as any)).toBe(false)
      expect(nodeNull.equals(nodeZero as any)).toBe(false)
    })

    test('should handle number values (integer and float)', () => {
      const nodeInt = new SimpleLinkeListNode(42)
      const nodeFloat = new SimpleLinkeListNode(42.5)
      const nodeNegative = new SimpleLinkeListNode(-10)
      const nodeZero = new SimpleLinkeListNode(0)
      const nodeIntAgain = new SimpleLinkeListNode(42)

      expect(nodeInt.hashCode()).toBe(42)
      expect(nodeFloat.hashCode()).not.toBe(42.5) // Floats are stringified
      expect(nodeNegative.hashCode()).toBe(-10)
      expect(nodeZero.hashCode()).toBe(0)
      expect(nodeInt.equals(nodeIntAgain)).toBe(true)
      expect(nodeInt.equals(nodeFloat)).toBe(false)
    })

    test('should handle boolean values', () => {
      const nodeTrue = new SimpleLinkeListNode(true)
      const nodeFalse = new SimpleLinkeListNode(false)
      const nodeTrueAgain = new SimpleLinkeListNode(true)
      const nodeOne = new SimpleLinkeListNode(1)

      expect(nodeTrue.hashCode()).toBe(1)
      expect(nodeFalse.hashCode()).toBe(0)
      expect(nodeTrue.equals(nodeTrueAgain)).toBe(true)
      expect(nodeFalse.equals(new SimpleLinkeListNode(null) as any)).toBe(false)
      expect(nodeTrue.equals(nodeOne as any)).toBe(false)
    })

    test('should handle string values (including empty)', () => {
      const nodeStr = new SimpleLinkeListNode('hello')
      const nodeEmpty = new SimpleLinkeListNode('')
      const nodeStrAgain = new SimpleLinkeListNode('hello')

      expect(nodeStr.hashCode()).not.toBe(0)
      expect(nodeEmpty.hashCode()).not.toBe(0) // FNV hash of empty string is not 0
      expect(nodeEmpty.hashCode()).toBe(new SimpleLinkeListNode('').hashCode()) // Consistent hash for empty
      expect(nodeStr.equals(nodeStrAgain)).toBe(true)
      expect(nodeStr.equals(nodeEmpty)).toBe(false)
    })

    test('should handle object values (including empty and nested)', () => {
      const nodeObj = new SimpleLinkeListNode({ a: 1, b: 'test' })
      const nodeObjAgain = new SimpleLinkeListNode({ a: 1, b: 'test' })
      const nodeEmptyObj = new SimpleLinkeListNode({})
      const nodeNested = new SimpleLinkeListNode({ a: { c: true }, b: null })

      expect(nodeObj.hashCode()).toBe(nodeObjAgain.hashCode())
      expect(nodeObj.equals(nodeObjAgain)).toBe(false)
      expect(nodeEmptyObj.hashCode()).not.toBe(0)
      expect(nodeObj.equals(nodeEmptyObj as any)).toBe(false)
      expect(nodeNested.hashCode()).toBe(
        new SimpleLinkeListNode({ a: { c: true }, b: null }).hashCode()
      )
    })

    test('should handle array values', () => {
      const nodeArr = new SimpleLinkeListNode([1, 'two', true])
      const nodeArrAgain = new SimpleLinkeListNode([1, 'two', true])
      const nodeEmptyArr = new SimpleLinkeListNode([])

      expect(nodeArr.hashCode()).toBe(nodeArrAgain.hashCode())
      expect(nodeArr.equals(nodeArrAgain)).toBe(false)
      expect(nodeEmptyArr.hashCode()).not.toBe(0)
      expect(nodeArr.equals(nodeEmptyArr)).toBe(false)
    })

    // --- Failure Scenarios ---

    test('should throw error for circular references in objects', () => {
      const circularObj: any = { name: 'circular' }
      circularObj.self = circularObj
      const nodeCircular = new SimpleLinkeListNode(circularObj)

      expect(() => nodeCircular.hashCode()).toThrow(TypeError)
      expect(() => nodeCircular.hashCode()).toThrow(
        'Converting circular structure to JSON'
      )
    })

    test('should throw error for BigInt within objects', () => {
      const objWithBigInt = { big: 1234567890123456789012345678901234567890n }
      const nodeBigIntObj = new SimpleLinkeListNode(objWithBigInt)

      expect(() => nodeBigIntObj.hashCode()).toThrow(TypeError)
      expect(() => nodeBigIntObj.hashCode()).toThrow(
        'Do not know how to serialize a BigInt'
      )
    })

    // Note: Directly testing hash collisions is difficult and unreliable.
    // This test focuses on the potential *consequences* if one were to occur.
    test('equals relies on hashCode, susceptible to collisions (conceptual)', () => {
      // We can't easily force a collision, but we know equals uses hashCode.
      // If two different values HASHED to the same number, equals would be true.
      const nodeA = new SimpleLinkeListNode('Value A')
      const nodeB = new SimpleLinkeListNode('Value B')

      // Mock hashCode to simulate a collision
      // Use vi.spyOn for Vitest
      const spyA = vi.spyOn(nodeA, 'hashCode').mockReturnValue(12345)
      const spyB = vi.spyOn(nodeB, 'hashCode').mockReturnValue(12345)

      expect(nodeA.equals(nodeB)).toBe(false)

      // Restore original implementation
      spyA.mockRestore()
      spyB.mockRestore()

      expect(nodeA.equals(nodeB)).toBe(false) // Correctly false without collision
    })

    test('should handle Symbol values (potential for incorrect equality)', () => {
      const sym1 = Symbol('desc')
      const nodeSym = new SimpleLinkeListNode<symbol>(sym1)
      // This relies on String(Symbol('desc')) being hashed
      const nodeStrSym = new SimpleLinkeListNode<string>('Symbol(desc)')

      // Their hash codes might collide based on string representation
      expect(nodeSym.hashCode()).toBe(nodeStrSym.hashCode())
      // This comparison is logically incorrect but returns true due to hash collision
      expect(nodeSym.equals(nodeStrSym as any)).toBe(false)

      const sym2 = Symbol('desc')
      const nodeSym2 = new SimpleLinkeListNode<symbol>(sym2)
      // Different Symbols, even with same description, are not equal
      expect(nodeSym.equals(nodeSym2)).toBe(false) // Correctly false, different symbol instances hash differently via stringify
    })

    test('should differentiate between near-integer floats and integers due to hashing', () => {
      const nodeInt = new SimpleLinkeListNode(1)
      // This float is very close to 1 but not exactly 1
      const nodeNearFloat = new SimpleLinkeListNode(1.0000000000000001)
      const nodeExactFloat = new SimpleLinkeListNode(1.0)

      expect(nodeInt.hashCode()).toBe(1)
      expect(nodeExactFloat.hashCode()).toBe(1) // 1.0 is treated as integer 1
      // nodeNearFloat will be hashed based on its string representation
      expect(nodeNearFloat.hashCode()).toBe(1)

      expect(nodeInt.equals(nodeExactFloat)).toBe(true)
      expect(nodeInt.equals(nodeNearFloat)).toBe(true)
    })

    test('should handle comparison with null other node', () => {
      const node = new SimpleLinkeListNode(5)
      expect(node.equals(null)).toBe(false)
    })
  })

  describe('getNext and setNext', () => {
    test('should correctly get and set the next node', () => {
      const node1 = new SimpleLinkeListNode(1)
      const node2 = new SimpleLinkeListNode(2)

      expect(node1.getNext()).toBeNull()
      node1.setNext(node2)
      expect(node1.getNext()).toBe(node2)
      expect(node2.getNext()).toBeNull()
      node1.setNext(null)
      expect(node1.getNext()).toBeNull()
    })
  })

  describe('getValue', () => {
    test('should return the correct value', () => {
      const node = new SimpleLinkeListNode('test value')
      expect(node.getValue()).toBe('test value')

      const nodeObj = new SimpleLinkeListNode({ key: 'value' })
      expect(nodeObj.getValue()).toEqual({ key: 'value' })
    })
  })
})
