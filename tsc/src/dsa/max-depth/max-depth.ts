import { SimpleTreeNode } from '../simple-tree-node'

/**
 * Given the root of a binary tree, returns its maximum depth.
 *
 * Example:
 * Input:
 *      4
 *    /   \
 *   2     7
 *  / \
 * 1   3
 *
 * Output: 4
 */
export const maxDepth = (node: SimpleTreeNode | undefined): number => {
  if (!node) {
    return 0
  }

  const leftDepth = maxDepth(node.left)
  const rightDepth = maxDepth(node.right)

  return Math.max(leftDepth, rightDepth) + 1
}
