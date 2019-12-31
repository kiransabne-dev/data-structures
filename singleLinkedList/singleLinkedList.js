class Node {
  constructor(value){
    this.value = value
    this.next = null
	
  }
}

// 1 -> 2 -> 3 -> 5 -> 6
class SingleList {
  constructor(){
    this.first = null
    this.last = null
	this.length = 0
  }

  addFirst(value){
    const node = new Node(value)
    node.next = this.first
    if(this.first){
      //if list is not empty
      this.first = node
	  this.length++
    } else {
      //if list is empty
      this.first = node
      this.last = node
	  this.length++
    }
  }

  removeFirst(){
    const first = this.first
    if(first){
      this.first = first.next
	  this.length--
      return first.value
    } else {
      this.first = null
      this.last = null
	  this.length--
    }
  }

  addLast(value){
    const node = new Node(value)
    if(this.first){
      //list is not empty
      const current = this.first
      this.last.next = node
      this.last = node
	  this.length++
    } else {
      //if is empty
      this.first = node
      this.last = node
	  this.length++
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
	  this.length--
    } else {
      this.first = null
      this.last = null
      target = current
	  this.length--
    }
    if(target){
      return target.value
    }
  }
// 1 -> 2 -> 3 -> 5 -> 6
  addAt(nth, value){
    const node = new Node(value)
    if(nth === 0){
      return this.addFirst(value)

    }
    for(let current = this.first, index = 0; current; current = current.next, index++){
      if(index === nth){
        if(!current.next){
          return this.addLast(value)
        }
        node.next = current.next
        current.next = node
		this.length++
      }
    }
  }

  removeAt(nth){
    if(nth === 0){
      return this.removeFirst()
    }
	else if(nth === (this.length - 1)){
		return this.removeLast()
	} 
	else {
		const previousNodeOfNodeToRemove = this.get(nth - 1)
		
		let nodeToRemove = previousNodeOfNodeToRemove.next
		previousNodeOfNodeToRemove.next = nodeToRemove.next
		this.length--
		return nodeToRemove
	}
	
 
	
  }
	get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let count = 0;
      let currentNode = this.first;

      while (count < index) {
        currentNode = currentNode.next;
        count += 1;
      }

      return currentNode;
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

  contains(value) {
      for (let current = this.first, index = 0; current; index++, current = current.next) {
        if (current.value === value) {
          return index;
        }
      }
    }



}

const list = new SingleList()
//console.log(list)

list.addFirst('first')
list.addFirst('Second')
list.addFirst('Third')
//console.log(list)
//console.log('list =>', list.print())

list.removeFirst()
//console.log('after removing first =>', list)


list.addLast('fourth')
list.addLast('fifth')
//console.log('list =>', list.print())
//list.print()
list.removeLast()
//console.log('list =>', list.print())
list.addAt(1, 'added between')
console.log('list =>', list.print())
console.log(list.contains('added between'))
//console.log('remove at => ', list.removeAt(1))
console.log('get => ', list.get(1))
console.log('removeAt => ', list.removeAt(1))
console.log('list =>', list.print())

//console.log(list)
//console.log('list =>', list)
// console.log('after adding to last in list => ', list)
// list.print()

