/* 
Make the Group class from the previous exercise iterable.
If you used an array to represent the group’s members, 
don’t just return the iterator created by calling the Symbol.iterator 
method on the array. That would work, but it defeats the purpose of this exercise.
*/

class Group {
    constructor() {
        this.content = []
    }
    
    add(num) {
        if (!this.content.includes(num)) {
            this.content.push(num)
        }
    }
    
    delete(num) {
      this.content = this.content.filter(item => item !== num)
    }
    
    has(num) {
        if (this.content.includes(num)) {
            return true
        } else {
            return false
        }
    }
    
    static from(itObj) {
        let y = new Group()
        for(let i of itObj) {
            y.add(i)
        }
        return y
    }

    [Symbol.iterator]() {
        return new GroupIterator(this)
    }
}


class GroupIterator {
    constructor(set) {
        this.set = set;
        this.counter = 0
    }

    next() {
        if (this.counter >= this.set.content.length) {
            return {done: true}
        } else {
            let returner = {value: this.set.content[this.counter], done: false}
            this.count++
            return returner
        }
    }
}



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}