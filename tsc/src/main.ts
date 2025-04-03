import { invertTree } from './dsa/invert/invert'
import { SimpleTreeNode } from './dsa/simple-tree-node'

const root = new SimpleTreeNode(4)
root.left = new SimpleTreeNode(2)
root.right = new SimpleTreeNode(7)

root.left.left = new SimpleTreeNode(1)
root.left.right = new SimpleTreeNode(3)

root.right.left = new SimpleTreeNode(6)
root.right.right = new SimpleTreeNode(9)

root.printByLevel()

invertTree(root)

root.printByLevel()
