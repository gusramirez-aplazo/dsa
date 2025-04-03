import { beforeEach, describe, expect, it } from 'vitest'
import { SimpleTreeNode } from '../simple-tree-node'
import { listOfDepths } from './ll-from-tree'

describe('listOfDepths', () => {
  let tree: SimpleTreeNode

  beforeEach(() => {
    tree = new SimpleTreeNode(4)
    tree.left = new SimpleTreeNode(2)
    tree.right = new SimpleTreeNode(7)

    tree.left.left = new SimpleTreeNode(1)
    tree.left.right = new SimpleTreeNode(3)

    tree.right.left = new SimpleTreeNode(6)
    tree.right.right = new SimpleTreeNode(9)
  })

  it('should return a list of depths', () => {
    const result = listOfDepths(tree)
    const [level1, level2, level3] = result

    expect(result.length).toBe(3)
    expect(level1.size()).toBe(1)
    expect(level2.size()).toBe(2)
    expect(level3.size()).toBe(4)
    expect(level1.toString()).toBe('4')
    expect(level2.toString()).toBe('2 -> 7')
    expect(level3.toString()).toBe('1 -> 3 -> 6 -> 9')
  })
})
