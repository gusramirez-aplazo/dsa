import { SimpleTreeNode } from '../simple-tree-node'

export const invertTree = (node: SimpleTreeNode | undefined) => {
  if (node == null) {
    return undefined
  }

  const temp = node.left

  node.left = invertTree(node.right)
  node.right = invertTree(temp)

  return node
}
