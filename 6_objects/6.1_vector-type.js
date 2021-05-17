/* 
Write a class Vec that represents a vector in two-dimensional space. 
It takes x and y parameters (numbers), which it should save to properties of the same name.
*/

class Vec {
    constructor(x,y) {
        this.x = x,
        this.y = y
    } 
    plus(vec) {
        return new Vec((this.x + vec.x), (this.y + vec.y));
    }
    minus(vec) {
        return new Vec((this.x - vec.x), (this.y - vec.y));
    } 
    get length() {
        return Math.floor(Math.sqrt((this.x * this.x) + (this.y * this.y)));
    }
}



console.log(new Vec(1, 2).plus(new Vec(2, 3)));
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
console.log(new Vec(1, 4).length);