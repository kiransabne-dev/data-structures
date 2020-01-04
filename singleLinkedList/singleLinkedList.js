class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class SingleLinkedList {
  constructor(){
    this.first = null
    this.last = null
    this.size = 0
  }

  addFirst(value){
    const node = new Node(value)
    node.next = this.first
    if(this.first){
      this.first = node
      this.size++
    } else {
      this.first = node
      this.last = node
      this.size++
    }
  }

  removeFirst(){
    const first = this.first
    if(first){
      this.first = first.next
      this.size--
      return first.value
    }else {
      this.first = null
      this.last = null
      this.size--
    }
  }

  addLast(value){
    const node = new Node(value)
    if(this.first){
      this.last.next = node
      this.last = node
      this.size++
    } else {
      this.first = node
      this.last = node
      this.size++
    }
  }

  removeLast(){
    let current = this.first
    let target
    if(current && current.next){
      while(current && current.next && current.next.next){
        current = current.next
      }
      this.last = current
      target = current.next
      current.next = null
      this.size--
    } else {
      this.first = null
      this.last = null
      this.size--
    }
  }

  print(){
    let current = this.first
    let arr = []
    while(current !== null){
      arr.push(current.value)
      current = current.next
    }
    return arr
  }

  get(position){
    if(position < 0 || position >= this.size){
      return null
    }
    let current = this.first
    let counter = 0
    while(counter < position){
      current = current.next
      counter++
    }
    return current
  }

  //1-> 2-> 3-> 4-> 5-> null 
  addAt(position, value){
    if(position === 0){
      return this.addFirst(value)
    } 
    for(let current = this.first, index = 0; current; current = current.next, index++){
      if(index === position){
        if(!current.next){
          return this.addLast(value)
        }
        const node = new Node(value)
        node.next = current.next
        current.next = node
        this.size++
      }
    }
  }

  removeAt(position){
    if(position === 0){
      return this.removeFirst()
    }
    else if(position ===(this.size - 1)){
      return this.removeLast()
    } else {
      let previousNodeOfTheNodeToBeRemoved = this.get(position - 1)
      let nodeToBeRemoved = previousNodeOfTheNodeToBeRemoved.next
      //set
      previousNodeOfTheNodeToBeRemoved.next = nodeToBeRemoved.next
      this.size--
      return nodeToBeRemoved
    }
  }

  reverse(){
    let node = this.first
    let previous = null, temp;
    while(node){
      temp = node.next
      node.next = previous
      previous = node
      node = temp
    }
    return previous
  }

}

const linkedList = new SingleLinkedList()
linkedList.addFirst('first')
linkedList.addFirst('second')
linkedList.addLast('third')
linkedList.addLast('fourth')
console.log(linkedList.print())
linkedList.removeFirst()
console.log('remove First => ', linkedList.print())
linkedList.removeLast()
console.log('remove Last => ', linkedList.print())
console.log(linkedList.get(0))
linkedList.addAt(1, 'added at')
console.log('add at => ', linkedList.print())
linkedList.removeAt(1)
console.log('remove at => ', linkedList.print())
console.log('reverse =>', linkedList.reverse())
