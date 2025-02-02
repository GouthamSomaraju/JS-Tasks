
// var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
    
// op=["mom","dad","malayalam"]
// using for/while and do-while loop

var aos = ["mom", "js", "malayalam", "html", "css", "dad"];
let op = [];

// Using for loop

for(i=0;i<aos.length;i++){
if(aos[i]==aos[i].split('').reverse().join('')){
   
    op.push(aos[i]);
}
}
console.log(op); // op=["mom","dad","malayalam"]

// with do-while loop
var i=0
var palindromes = [];
do{
 var str = aos[i];
if(str===str.split('').reverse().join('')){
    palindromes.push(str);
}
i++;
}while(i<aos.length)

console.log(palindromes); // op=["mom","dad","malayalam"]
