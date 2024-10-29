// 1.Problem 
//  Given a variable 'score', use a ternary operator to determine the performance level:
// "Excellent if score is 90 or above,
// "Good" Lf score is between 68 and 89,
// "Needs Improvement" if score is below 60.

// Answer:
    var score = 50;
    score >= 90
    ? console.log("Excellent")
    : score >= 60
    ? console.log("Good")
    : console.log("Needs Improvement");



// 2.Problem 
// Given a variable day use a ternary operator to check if it's a weekend:
//  "Weekend" if day is "Saturday" or "Sunday", "Weekday for any other day.

// Answer:
    var day = "monday";

    (day == "saturday" || day == "sunday")
    ? console.log("Weekend")
    : console.log("Weekday");
    // output: "Weekday"



// 3.Problem 
// Given a string 'inputstring', use the ternary operator to check if it is a palindrome.
// A string is considered a palindrome if it reads the same forwards and backwards.
// **Output:**"Palindrome" if the string is a palindrome, ""Not a Palindrome otherwise.

// Answer:
var inputString = "madam";
var a = inputString[0];
var b = inputString.split("").pop();

(a == b )? console.log("Palindrome") : console.log("Not a Palindrome");


// 4.Problem 4
// Input: HELLO
// Output:
  // H
  // HE
  // HEL 
  // HELL
  // HELLO

// Answer:
var str = "HELLO";
var op = "";
for (i = 0; i <= str.length - 1; i++) {
  op += str[i];
  console.log(op);
}
