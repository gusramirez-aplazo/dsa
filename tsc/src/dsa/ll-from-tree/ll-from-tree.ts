import { cloneQueue, SimpleQueue } from '../simple-queue'
import { SimpleTreeNode } from '../simple-tree-node'

export const listOfDepths = (root: SimpleTreeNode) => {
  const result: SimpleQueue<SimpleTreeNode>[] = []
  let current: SimpleQueue<SimpleTreeNode> = new SimpleQueue<SimpleTreeNode>()

  current.enqueue(root)

  while (!current.isEmpty()) {
    result.push(current)

    const parents = cloneQueue(current)

    current = new SimpleQueue<SimpleTreeNode>()

    while (!parents.isEmpty()) {
      const parent = parents.dequeue()

      if (parent?.left) {
        current.enqueue(parent.left)
      }

      if (parent?.right) {
        current.enqueue(parent.right)
      }
    }
  }

  return result
}
