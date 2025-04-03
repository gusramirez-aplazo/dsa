export class SimpleTreeNode {
  value: number
  left: SimpleTreeNode | undefined
  right: SimpleTreeNode | undefined

  constructor(val: number) {
    this.value = val
  }

  printByLevel(): void {
    const queue: SimpleTreeNode[] = [this]
    const levels: number[][] = []

    while (queue.length > 0) {
      const levelSize = queue.length
      const currentLevel: number[] = []

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!
        currentLevel.push(node.value)

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }

      levels.push(currentLevel)
    }

    // Print level by level with proper spacing
    levels.forEach((level, i) => {
      // Calculate spacing for this level
      const spacing = ' '.repeat(Math.pow(2, levels.length - i) - 1)
      const between = ' '.repeat(Math.pow(2, levels.length - i + 1) - 1)

      console.log(spacing + level.join(between))
    })
  }
}
