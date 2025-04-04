package linkedlisttest_test

import (
	"testing"

	linkedlist "github.com/gusramirez-aplazo/dsa/go/internal/linked-list"
)

func TestAdd(t *testing.T) {
	ll := linkedlist.NewLinkedList()

	ll.Add(1)
	ll.Add(2)
	ll.Add(3)

	expected1 := 1
	if ll.Root.Value != expected1 {
		t.Errorf("Expected root value to be %d, got %d", expected1, ll.Root.Value)
	}

	expected2 := 2
	if ll.Root.Next.Value != expected2 {
		t.Errorf("Expected root next value to be %d, got %d", expected2, ll.Root.Next.Value)
	}

	expected3 := 3
	if ll.Root.Next.Next.Value != expected3 {
		t.Errorf("Expected root next next value to be %d, got %d", expected3, ll.Root.Next.Next.Value)
	}
}

func TestRemove(t *testing.T) {
	ll := linkedlist.NewLinkedList()

	ll.Add(1)
	ll.Add(2)
	ll.Add(3)

	ll.Remove(2)

	expected1 := 1
	if ll.Root.Value != expected1 {
		t.Errorf("Expected root value to be %d, got %d", expected1, ll.Root.Value)
	}

	expected2 := 3
	if ll.Root.Next.Value != expected2 {
		t.Errorf("Expected root next value to be %d, got %d", expected2, ll.Root.Next.Value)
	}
}
