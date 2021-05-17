// Can you think of a way to call hasOwnProperty on an object that has its own property by that name?

let map = {one: true, two: true, hasOwnProperty: true};



console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
console.log(Object.prototype.hasOwnProperty.call(map, "made up"));
// → false