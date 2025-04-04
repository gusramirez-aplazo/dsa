package main

import (
	"fmt"

	linkedlist "github.com/gusramirez-aplazo/dsa/go/internal/linked-list"
)

func main() {
	ll := linkedlist.NewLinkedList()

	ll.Add(1)
	ll.Add(2)
	ll.Add(3)

	fmt.Println(ll.ToString())

	ll.Remove(2)

	fmt.Println(ll.ToString())
}
