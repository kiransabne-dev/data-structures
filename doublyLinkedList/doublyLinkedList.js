class Node {
    constructor(value){
      this.value = value
      this.next = next
      this.previous = previous
    }
  }
  
  class DoublyLinkedList {
    constructor(){
      this.first = null
      this.last = null
      this.size = 0
    }
  
    addFirst(value){
      const node = new Node(value)
      node.next = this.first
      if(this.first){
        this.first.previous = node
      } else {
        this.last = node
      }
      this.first = node
      this.size++
      return node
    }
  
    removeFirst(){
      let first = this.first
      if(first){
        this.first = first.next
        if(this.first){
          this.first.previous = null
        }
        this.size--
        return first
      } else {
        this.last = null
      }
    }
  
    addLast(value){
      let node = new Node(value)
      
      if(this.first){
        node.previous = this.last
        this.last.next = node
        this.last = node
      } else{
        this.first = node
        this.last = node
        
      }
      this.size++
      return node
    }
  
    removeLast(){
      let current = this.first
      let target
      if(current && current.next){
        current = this.last.previous
        this.last = current
        target = current.next
        current.next = null
        this.size--
      } else {
        this.first = null
        this.last = null
        target = current
        this.size--
      }
      if(target){
        return target.value
      }
    }
  
    print(){
      let node = this.first
      let arr = []
      while(node !== null){
        arr.push(node.value)
        node = node.next
      }
      return arr
    }
  
    get(position){
      let current = this.first
      let index = 0
      while(index < position){
        current = current.next
        index++
      }
      return current
    }
  
  
  }