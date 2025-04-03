import { beforeEach, describe, expect, it } from 'vitest'
import { SimpleTreeNode } from '../simple-tree-node'
import { inOrderTraversal } from '../traversal'
import { invertTree } from './invert'

describe('invertTree', () => {
  let root: SimpleTreeNode

  beforeEach(() => {
    root = new SimpleTreeNode(4)

    root.left = new SimpleTreeNode(2)
    root.right = new SimpleTreeNode(7)

    root.left.left = new SimpleTreeNode(1)
    root.left.right = new SimpleTreeNode(3)

    root.right.left = new SimpleTreeNode(6)
    root.right.right = new SimpleTreeNode(9)
  })

  it('should invert the tree', () => {
    const result = inOrderTraversal(root)

    expect(result).toEqual([1, 2, 3, 4, 6, 7, 9])

    invertTree(root)

    const result2 = inOrderTraversal(root)

    expect(result2).toEqual([9, 7, 6, 4, 3, 2, 1])
  })
})
