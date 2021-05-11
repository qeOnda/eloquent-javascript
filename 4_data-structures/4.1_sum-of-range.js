/*
Write a range function that takes two arguments,
start and end, and returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.
*/

const ranger = (start, end, step=start < end ? 1: -1) => {
    arr = []
    if (step > 0) {
      for (let i = start; i <= end; i += step) {
        arr.push(i)
      }
    } else {
        for (let i = start; i >= end; i += step) {
        arr.push(i)
      }
    }
    return summer(arr)
    // return arr
}

const summer = (arr) => {
    total = 0
    for (let num of arr) {
      total += num
    }
    return total
}

console.log(ranger(1, 10));
console.log(ranger(5,2,-1));
