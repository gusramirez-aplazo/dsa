package linkedlist

import (
	"fmt"
	"strings"

	simplellnode "github.com/gusramirez-aplazo/dsa/go/internal/simple-ll-node"
)

type LinkedList struct {
	Root *simplellnode.SimpleLLNode
}

func NewLinkedList() *LinkedList {
	return &LinkedList{
		Root: nil,
	}
}

func (l *LinkedList) Add(value int) {
	if l.Root == nil {
		l.Root = simplellnode.NewSimpleLLNode(value)
		return
	}

	currentNode := l.Root

	for currentNode.Next != nil {
		currentNode = currentNode.Next
	}

	currentNode.Next = simplellnode.NewSimpleLLNode(value)
}

func (l *LinkedList) Remove(value int) {
	if l.Root == nil {
		return
	}

	if l.Root.Value == value {
		l.Root = l.Root.Next
		return
	}

	currentNode := l.Root

	for currentNode.Next != nil {
		if currentNode.Next.Value == value {
			currentNode.Next = currentNode.Next.Next
			return
		}

		currentNode = currentNode.Next

	}
}

func (l *LinkedList) ToString() string {
	if l.Root == nil {
		return ""
	}

	builder := strings.Builder{}

	currentNode := l.Root

	builder.WriteString(fmt.Sprintf("%d", currentNode.Value))

	for currentNode.Next != nil {
		builder.WriteString(fmt.Sprintf(" -> %d", currentNode.Next.Value))
		currentNode = currentNode.Next
	}

	return builder.String()
}
