// 1
var arr=['Apple', 'Banana', 'Orange'];
console.log(arr.join("-")) //output-- "apple,banana,orange"

// 2
var numbers=[1,2,3,4,5];
console.log(numbers.join("-")); //output-- "1-2-3-4-5"

// 3
var chars=['H','e','l','l','o'];
console.log(chars.join("")); //output-- "Hello"

// 4
var text="Javascript is awesome";
console.log(text.slice(0,10)); //output-- "Javascript"


// 5
var sentence= "I Love Learning JavaScript";
console.log(sentence.slice(7,15)); //output-- "Learning"

// 6
var text="Frontend Development"
console.log(text.slice(-11)); //output-- "Development"

// 7
var date="2024-10-21";
console.log(date.split("-")); //output-- [ '2024', '10', '21' ]

// 8
var text="I Love JavaScript programming";
var x=text.split(" ");
var y=x.slice(0,2);
console.log(y); //output-- [ 'I', 'Love' ]

// console.log(text.split(" ").slice(0,2)); //output-- [ 'I', 'Love' ]

``
// 9
var url="https://www.example.com/path/page.html";
console.log(url.split("/")); //output-- [ 'https:', '', 'www.example.com', 'path', 'page.html' ]
 