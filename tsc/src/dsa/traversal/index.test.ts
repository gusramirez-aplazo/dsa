import { beforeEach, describe, expect, it } from 'vitest'
import { postOrderTraversal, preOrderTraversal } from '.'
import { SimpleTreeNode } from '../simple-tree-node'
import { inOrderTraversal } from './index'

describe('traversal', () => {
  let root: SimpleTreeNode

  beforeEach(() => {
    root = new SimpleTreeNode(1)

    root.left = new SimpleTreeNode(2)
    root.right = new SimpleTreeNode(3)

    root.left.left = new SimpleTreeNode(4)
    root.left.right = new SimpleTreeNode(5)

    root.right.right = new SimpleTreeNode(6)

    root.left.left.left = new SimpleTreeNode(7)

    root.left.right.left = new SimpleTreeNode(8)
  })

  describe('inOrderTraversal', () => {
    it('should traverse the tree in order', () => {
      const result = inOrderTraversal(root)

      expect(result).toEqual([7, 4, 2, 8, 5, 1, 3, 6])
    })
  })

  describe('preOrderTraversal', () => {
    it('should traverse the tree in pre order', () => {
      const result = preOrderTraversal(root)

      expect(result).toEqual([1, 2, 4, 7, 5, 8, 3, 6])
    })
  })

  describe('postOrderTraversal', () => {
    it('should traverse the tree in post order', () => {
      const result = postOrderTraversal(root)

      expect(result).toEqual([7, 4, 8, 5, 2, 6, 3, 1])
    })
  })
})
