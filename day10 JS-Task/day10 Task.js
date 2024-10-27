// 1.   var num=[3,5,10,15,23,22,25,35,56]
// o/p: [ 5, 10, 15, 25, 35 ]

var num=[3,5,10,15,23,22,25,35,56]

var num1=[]

for(i in num){
    if(num[i]%5==0){
    num1.push(num[i])
    }
}console.log(num1)  // Output: [ 5, 10, 15, 25, 35 ]


// 2.  var arr1=["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"];
//o/p: [ 'htmL', 'csS', 'javaScrIPT', 'angulaR', 'nodE' ]

var arr1=["htmL","csS","javaScrIPT","react","angulaR","nodE","EXPREss"];
var arr2=[]

for(i in arr1){
    if(arr1[i]!=arr1[i].toLowerCase())
        arr2.push(arr1[i])
}
arr2.pop()
console.log(arr2) //output-- [ 'htmL', 'csS', 'javaScrIPT', 'angulaR', 'nodE' ]



// 3.   var arr=["html", "css","js","react","angular"]
// o/p: [ 'HTML', 'JS', 'ANGULAR' ]

var arr=["html", "css","js","react","angular"]
var arr1=[]

for(i in arr){
    if(i%2==0){
    arr1.push(arr[i].toUpperCase())
    }

}console.log(arr1) //output-- [ 'HTML', 'JS', 'ANGULAR' ]
