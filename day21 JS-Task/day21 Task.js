// 1.Write a function squareNumbers(arr) that returns a new array where each number in the original array is squared using map method.
let array=[1,2,3,4,6]

let squares=array.map(function (a) {
   return a**2
})
console.log(squares);



// 2.Write a function toUppercase(arr) that returns a new array where each string in the original array is converted to uppercase using map method.

let array1=["hi","hello"]

let uppercase=array1.map(function (a) {
   return a.toUpperCase()
})
console.log(uppercase);
