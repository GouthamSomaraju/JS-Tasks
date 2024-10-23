// 1.Write a JavaScript code to add an element to the end of an array using the Push method.
// Example: [1,2,3] -> [ 1, 2, 3, 4 ]
// Ans:
    var arr1=[1,2,3];
    arr1.push(4);
    console.log(arr1); //output-- [ 1, 2, 3, 4 ]

// 2.Write a JavaScript code to remove the last element from an array using the Pop method.
// Example: [1,2,3,4] -> [ 1, 2, 3 ]
// Ans:
    var arr2=[1,2,3,4];
    arr2.pop();
    console.log(arr2); //output-- [ 1, 2, 3 ]

// 3.Write a JavaScript code to add an element to the beginning of an array using the Unshift method.
// Example: [2,3,4] -> [ 1, 2, 3, 4 ]
// Ans:
    var arr3=[2,3,4];
    arr3.unshift(1);
    console.log(arr3); //output-- [ 1, 2, 3, 4 ]

// 4.Write a JavaScript code to remove the first element from an array using the Shift method.
// Example: [1,2,3,4] -> [ 2, 3, 4 ]
// Ans:
    var arr4=[1,2,3,4];
    arr4.shift();
    console.log(arr4); //output-- [ 2, 3, 4 ]

// 5.Write a JavaScript code to convert an array into a string using the Join method.
// Example: [1,2,3] -> "123"
// Ans:
    var arr5=[1,2,3,4];
    let x=arr5.join('');
    console.log(x);  //output--"1234"


// 1. What will be the output of [1,2,3,4].pop() ? Ans[B]

// A) [1, 2, 3, 4]
// B) [1, 2, 3]
// C) [2, 3, 4]
// D) Error

var ar1=[1,2,3,4]; //Here we are declaring the variable with an array
ar1.pop();         //Here we are using pop method to remove the last element in the array
console.log(ar1); //output-- [ 1, 2, 3 ]  -- after pop method called array we log the variable to get output

// 2. What will be the output of [1,2,3].push(4) ? Ans[B]

// A) [1, 2, 3]
// B) [1, 2, 3, 4]
// C) [4, 1, 2, 3]
// D) Error
var ar2=[1,2,3]; //Here we are declaring the variable with an array
ar2.push(4);     //Here we are using push method to add the last element in the array
console.log(ar2); //output-- [1, 2, 3, 4 ]  -- after push method called array we log the variable to get output


// 3. What will be the output of [1,2,3,4].shift() ? Ans[B]

// A) [1, 2, 3, 4]
// B) [2, 3, 4]
// C) [1,2,3]
// D) Error
var ar3=[1,2,3,4];   //Here we are declaring the variable with an array
ar3.shift();        //Here we are using shift method to remove the first element in the array
console.log(ar3);//output-- [ 2, 3, 4 ] -- after shift method called array we log the variable to get output




// 4. What will be the output of [2,3,4].unshift(1) ? Ans[B]

// A) [2, 3, 4]
// B) [1, 2, 3, 4]
// C) [1, 3, 4]
// D) Error
var ar4=[2,3,4];    //Here we are declaring the variable with an array
ar4.unshift(1);    //Here we are using unshift method to add the element in first  in the array
console.log(ar4); //output-- [1, 2, 3, 4 ]

// 5. What will be the output of [1,2,3].join("") ? Ans[A]

// A) 123
// B) [1, 2, 3]
// C) 1 2 3
// D) Error
var arr6=[1,2,3];        // Here we have declared the array
var x1 = arr6.join(""); // we are calling arry by the join method. The Join method concatenates all elements of the array into a single string.
                        //By passing an empty string "" as the argument to join, it indicates that there should be no characters placed between the elements when they are combined.
console.log(x1); //output-- "123"  when we log x1 variable it gives concated elements of array inform of single string 





