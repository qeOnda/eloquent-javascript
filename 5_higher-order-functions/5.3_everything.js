/*
Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
*/


function every(array, test) {
    return array.every(test)
}


function everyLoop(arr, func) {
    for (let a of arr) {
        if (func(a) == true) {
          continue
        } else if (func(a) == false) {
            return false
        }
    }
    return true
}




console.log(everyLoop([1, 3, 5], n => n < 10));
console.log(everyLoop([2, 4, 16], n => n < 10));
console.log(everyLoop([], n => n < 10));

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));