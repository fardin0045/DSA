class Node {
  constructor(value) {
    // console.log(value) -- 0
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    // console.log(this.head)
    this.tail = this.head;
    // console.log(this.tail)
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);
    // newNode
    //    ↓
    // [10 | null]
    if (!this.head) {
      // if head is falsy

      //  head
      //  ↓
      // [10|null]
      //  ↑
      // tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode; //Tail যে Node-টাকে দেখাচ্ছে, সেই Node-এর next-এর ভিতরে নতুন Node-এর address রেখে দাও।
      this.tail = newNode; //এখন Tail-ও নতুন Node-টাকেই দেখাক।
    }
    this.length++;
  }
  reverse(){
    let temp = this.head;
    this.head = this.tail
    this.tail = temp;

    let next = temp;
    let prev = null;
    for(let i =0; i< this.length; i++){
        next = temp.next;
        temp.next = prev;
        prev = temp
        temp = next
    }
  }
}

let myLinkedList = new LinkedList(0);
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.reverse()
console.log(myLinkedList);
