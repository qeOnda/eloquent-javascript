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
}




let group = Group.from([10, 20]);

console.log(group.has(10));
console.log(group.has(30));

group.add(10);
group.delete(10);

console.log(group)
console.log(group.has(10));
