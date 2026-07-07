class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;

    this.length = 1;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  pop() {
    let temp = this.head;
    let prev = this.head;
    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  unshift(value) {
    const newNode = new Node(value);
    console.log(newNode);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    console.log(newNode.next);

    this.head = newNode;
    console.log(this.head);

    this.length++;
    return this;
    console.log(this);
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    if (this.length === 0) {
      this.tail = null;
    }
    //1. Point the first node element
    let firstElement = this.head;
    console.log('First Element', firstElement);
    //2.Move the head to next node
    this.head = this.head.next;
    console.log(this.head);
    //3 remove first ELement
    firstElement.next = null;

    this.length--;

    return firstElement;
    console.log('This: ', firstElement);
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    // return this.tail;

    if (!this.head) {
      return null;
    }
    let temp = this.head;
    console.log('temp--', temp);
    while (temp !== null) {
      if (temp.next === null) {
        return temp;
      }
      temp = temp.next;
    }
  }
  getElementById(indx) {
    let count = 0;
    let temp = this.head;
    for (let i = 0; i < indx; i++) {
      temp = temp.next;
    }
    return temp;
    // while(temp !== null){
    //     if(count === indx){
    //         // console.log(indx)
    //         // console.log(temp)
    //         return temp

    //     }
    //     // console.log("Before--",count)
    //     count++
    //     // console.log("After--",count)
    //     temp = temp.next
    // }
    // return null
  }
  setElement(index, newVal) {
    let count = 0;
    let temp = this.head;
    while (temp) {
      if (count === index) {
        temp.head = newVal;
        console.log(temp.head);

        return true;
      }
      count++;
      temp = temp.next;
    }
    return false;
  }
  size() {
    let count = 0;
    let temp = this.head;
    // while (temp) {
    //   count++;
    //   temp = temp.next;
    // }
    // return count;
    for (let i = 0; temp; i++) {
        count++
        temp = temp.next;
    }
    return count
  }
  clear(){
    this.head = null
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.push(20);
myLinkedList.push(20);
myLinkedList.push(40);
// myLinkedList.unshift(0)
// // myLinkedList.shift(1)

console.log(myLinkedList);
console.log(myLinkedList.setElement(1, 4004));
console.log(myLinkedList);
console.log(myLinkedList.size());

// console.log('Element--', myLinkedList.getElementById(2));
