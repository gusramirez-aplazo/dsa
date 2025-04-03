import { SimpleTreeNode } from '../simple-tree-node'

/**
 * se visita la rama izquierda
 * se visita el nodo
 * se visita la rama derecha
 */
export const inOrderTraversal = (node: SimpleTreeNode | undefined) => {
  const result: number[] = []

  const traverse = (node: SimpleTreeNode | undefined) => {
    if (node != null) {
      traverse(node.left)
      result.push(node.value)
      traverse(node.right)
    }
  }

  traverse(node)

  return result
}

/**
 * se visita el nodo
 * se visita la rama izquierda
 * se visita la rama derecha
 */
export const preOrderTraversal = (node: SimpleTreeNode | undefined) => {
  const result: number[] = []

  const traverse = (node: SimpleTreeNode | undefined) => {
    if (node != null) {
      result.push(node.value)
      traverse(node.left)
      traverse(node.right)
    }
  }

  traverse(node)

  return result
}

/**
 * se visita la rama izquierda
 * se visita la rama derecha
 * se visita el nodo
 */
export const postOrderTraversal = (node: SimpleTreeNode | undefined) => {
  const result: number[] = []

  const traverse = (node: SimpleTreeNode | undefined) => {
    if (node != null) {
      traverse(node.left)
      traverse(node.right)
      result.push(node.value)
    }
  }

  traverse(node)

  return result
}
