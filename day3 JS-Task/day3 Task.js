// 1. What will be the output of this code?

let x=5;
let y=x;
x=10;
console.log(x); // output-- 10
console.log(y); // output-- 5



// 2.What will be the output of this code?
let obj1={ name:"Alice"};
let obj2=obj1;
obj1.name="Bob";
console.log(obj1.name); // output-- Bob
console.log(obj2.name); // output-- Bob


// 3.
    let a="hello";
    let b=42;
    let c=true;
    let d={key:"value"};
    let e=null;
    let f=undefined;

    console.log(typeof a); // output-- string
    console.log(typeof b); // output-- number
    console.log(typeof c); // output-- Boolean
    console.log(typeof d); // output-- object
    console.log(typeof e); // output-- object
    console.log(typeof f); // output-- undefined


// 4.
    let numbers=[10,20,30,40,50];

    console.log(numbers[2]); // output-- 30
    console.log(numbers[0]); // output-- 10
    console.log(numbers[numbers.length-1]); // output-- 50

// 5.
    let fruits=["apple", "banana", "mango"];
    fruits[1]="orange";

    console.log(fruits); // output-- ['apple', 'orange', 'mango'"]


// 6.
    let matrix=[
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    console.log(matrix[1][2]); // output-- 6
    console.log(matrix[2][0]); // output-- 7



// 7.
    let person={
        name:"Jhon",
        age:25,
        city:"New York"
    };

    console.log(person.name); //output-- Jhon
    console.log(person.age);  //output-- 25




// 8.
    let car={
        make:"Toyota",
        model:"Corolla",
        year:2021
    };
    console.log(car["make"]); //output-- Toyota
    console.log(car["model"]); //output-- Corolla




// 9.
    let book ={
        title:"The Great Gatsby",
        author:"F.Scott Fitzgerald"
    };
    book.author="Anonymous";
    console.log(book.author); //output-- Anonymous




// 10.
    let student={
        name:"Alice",
        grade:"A"
    };

    student.age=20;
    console.log(student); //output-- {name:'Alice', grade:'A', age:20}

        
