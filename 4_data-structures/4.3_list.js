/*
Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an 
element and a list and creates a new list that adds the element to the front of the input list, and nth, 
which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element.
*/

const arrayToList = (arr) => {
    let holder = {value: arr[arr.length-1], rest: null}
    for (let i=arr.length-2; i >= 0; i--) {
      holder = {value: arr[i], rest: holder}
    }
    return holder
}

const listToArray = (li) => {
    arr = []
    for (let node = li; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

const prepend = (value, list) => {
    return {value, rest: list}
}

const nth = (list, number) => {
    let error = undefined
    let arr = listToArray(list)
    if (arr[number]) {
        return arr[number]
    } else {
        return error
    }
}



let x = { value: 10, rest: { value: 20, rest: { value: 30, rest: null } } }

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(x))
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));



