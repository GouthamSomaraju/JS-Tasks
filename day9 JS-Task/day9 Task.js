// 1.Check if a Number is Even or odd

var number=prompt("enter the number")
        if(number%2==0){
            console.log(alert("Even"))
        }else{
            console.log(alert("Odd"))
        }



// 2.Compare Two Number's
// Write a JavaScript program that prompts the user to enter two numbers and alerts:
// "Greater if the first number is greater than the second, 
// "Equal" if both numbers are equal,
// "Smaller if the first number is smaller than the second.


var num1=prompt("enter 1st value")

var num2=prompt("enter 2st value")

if(num1>num2){
    console.log(alert(`${num1} is "Greater" than ${num2}`))
}else if(num1==num2){
    console.log(alert(`${num1} and ${num2} are equal numbers`))
}else{
    console.log(alert(`${num1} is "Smaller" than ${num2}`))
}



// 3.Driving Eligibility Check
// Write a JavaScript program that prompts the user to enter their age and whether they have 
// a valid driver's License (true or false). The program should alert "Can drive" if the person 
// is 18 or older and has a valid driver's license, otherwise it should alert "Cannot drive".


var age=prompt("enter your age")
var license= prompt("Do you have valid drivers license(true/false)")

if(age>=18 & license==='true'){
    console.log(alert("Can Drive"))
}
else{
    console.log(alert("Cannot Drive"))
}

// 4.Determine if a Number is Positive, Negative, or Zero
// Write a JavaScript program that prompts the user to enter a number and alerts .
// "Positive" if the number is greater than 0, "Negative" if the number is less than 0, 
// or "Zero" if the number is 0. 


var num = prompt("enter number:");

if (num > 0) {
  console.log(alert("Positive Number"));
} else if (num < 0) {
  console.log(alert("Negative Number"));
} else {
  console.log(alert("Zero"));
}
