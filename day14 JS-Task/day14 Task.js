
// 1.write a function to check whether input num is even or odd 
function number(x){
    if(x%2==0){
        console.log(`${x} is even number`)
    }
    else{
        console.log(`${x} is odd number`)
    }
}
number(6)
// output: 6 is even number

// ------------------------------------------------------------------------------------------------------------



// 2.write a function to check whether input string is palindrome or not
var b=""
function str(a){
 for(i=a.length-1;i>=0;i--){
    b+=a[i]
 }
//  console.log(b)
 if(b===a){
    console.log("Palindrome")
 }else{
    console.log("not Palindrome")
 }
}
str("mom")
// output: Palindrome

// -------------------------------------------------------------------------------------------------------------------


// 3.write a function to check largest num among three numbers.

function nums(a,b,c){
    if(a>b && a>c){
        console.log(`a = ${a} is greater number than b, c `)
    }
    if(b>c && b>a){
        console.log(`b = ${b} is greater number than c, a`)
    }
    if(c>a && c>b){
        console.log(`c = ${c} is greater number than a, b`)
    }
}
nums(1,3,9);
// output: c = 9 is greater number a, b