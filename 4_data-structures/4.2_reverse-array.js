/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
The second, reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

const reverseArray = (arr) => {
    newArr = []
    for (let num of arr) {
        newArr.unshift(num)
    }
    return newArr
}
  
const reverseArrayInPlace = (arr) => {
    let midPoint = Math.floor(arr.length / 2)
    let holder = arr[0]
    for (let i = 0; i < midPoint; i++) {
      holder = arr[i]
      arr[i] = arr[arr.length-1 -i]
      arr[arr.length-1 -i] = holder
    }
    console.log(arr)
}



console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue)