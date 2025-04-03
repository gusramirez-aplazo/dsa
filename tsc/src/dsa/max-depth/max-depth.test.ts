import { beforeEach, describe, expect, it } from 'vitest'
import { SimpleTreeNode } from '../simple-tree-node'
import { maxDepth } from './max-depth'

describe('maxDepth', () => {
  let root: SimpleTreeNode

  beforeEach(() => {
    root = new SimpleTreeNode(4)

    root.left = new SimpleTreeNode(2)
    root.right = new SimpleTreeNode(7)

    root.left.left = new SimpleTreeNode(1)
    root.left.right = new SimpleTreeNode(3)

    root.left.left.left = new SimpleTreeNode(8)
  })

  it('should return the max depth of the tree', () => {
    expect(maxDepth(root)).toBe(4)
  })
})
