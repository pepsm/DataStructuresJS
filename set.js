function mySet(){

    var collection = [];

    this.has = function(element){
        return (collection.indexOf(element) !== -1);
    }

    this.values = function(){
        return collection;
    }

    this.add = function(element){
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    }

    this.remove = function(element) {
        if(this.has(element)){
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    }

    // this method will return the size of the array
    this.size = function(){
        return collection.length;
    }

    // this method will return a union of two sets
    this.union = function(otherSet){
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();

        firstSet.forEach(element => {
            unionSet.add(element);
        });

        secondSet.forEach(element => {
            unionSet.add(element);
        })

        return unionSet;
    }

    //this method will return the intersection of two sets as a new set
    this.intersection = function(){
        var intersectionSet = new Set();  
        var firstSet = this.values();
        firstSet.forEach(element => {
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet;     
    }

    this.difference = function(otherSet){
        var intersectionSet = new Set();  
        var firstSet = this.values();
        firstSet.forEach(element => {
            if(!otherSet.has(element)){
                intersectionSet.add(element);
            }
        });
        return intersectionSet; 
    }

    // this method will test if the set is a subsiet of  a different set
    this.subset = function(otherSet){
        var firstSet = this.values();

        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    }
}

var setA = new mySet();
var setB = new mySet();

setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');

console.log(setA.subset(setB));