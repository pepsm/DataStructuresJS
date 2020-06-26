var Stack = function(){

    this.count = 0;
    this.storage = {};


    //Adds a value into the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Remove and returns the value at the end of the stack 
    this.pop = function(){

        if(this.count === 0){
            return undefined;
        }


        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    // size
    this.size = () => this.count;
    
    // peek
    this.peek = function(){
        return this.storage[this.count - 1];
    }
}



var stack = new Stack();

stack.push("This is a message from the last element.");
console.log(stack.peek());