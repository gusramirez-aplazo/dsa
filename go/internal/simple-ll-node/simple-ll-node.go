package simplellnode

type SimpleLLNode struct {
	Value int
	Next  *SimpleLLNode
}

func NewSimpleLLNode(value int) *SimpleLLNode {
	return &SimpleLLNode{
		Value: value,
		Next:  nil,
	}
}
