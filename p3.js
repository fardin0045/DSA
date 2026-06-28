class MyArray {
    constructor(){
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[item.length] = item;
        this.length++;
        return this.length
    }
    get(index){
        return this.data[index]
    }

    pop(){

        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1]
        this.length --
        return lastItem
    }
}

const newArray = new MyArray();

newArray.push('Apple');
newArray.push('Mango');
newArray.push('Banana');
newArray.pop();
console.log(newArray);
