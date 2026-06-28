const item = [1, 2, 3, 4, 5];
const even = item.filter((i) => i % 2 == 0);
// console.log(even);

const item1 = [1, 2, 3, 4, 5];
const mull = item.shift((i) => i + 2);
// console.log(mull);
const item2 = [1, 2, 3, 4, 5];
const shifted = item.shift();
// console.log(item2);

class MyArray {
  constructor() {
    ((this.length = 0), (this.data = {}));
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    console.log("Length After Push: "+this.length)
    return this.length;
  }
  get(){
    for(let i=0; i<this.length; i++){
        console.log(this.data[i])
    }
  }

  delete(index){
   const item = this.data[index];

   for(let i = index; i < this.length -1 ; i++){
    this.data[i] = this.data[i + 1]
   }
    delete this.data[this.length - 1];

   this.length --;
   return item;

  }
 

}
const newArray = new MyArray();
newArray.push("Apple")
newArray.push("Banana")
newArray.push("Orange")
newArray.push("Mojo")
// newArray.get();
console.log(newArray.delete(3))
console.log(newArray)
// console.log(newArray)