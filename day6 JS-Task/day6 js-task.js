// 1
var car={brand:"Toyota",model:"Corolla",year:"2020"};


for(i in car){

   console.log(`${i} : ${car[i].toUpperCase()}`);

}

// 2
var numbers = [1,2,3,4,5];

for( i in numbers){
   console.log(`${numbers[i]}-HI`);
}

// 3
var fruits=["Apple","Banana","Cherry","Date"];

for(i in fruits){
   console.log(` ${i}-${fruits[i].toUpperCase()} `)
}

// 4
var obj={
   name:"John",
   age:30,
   address:{
      city:"Loss Angeles",
      state:"CA"
   }
}
obj.address.city="San Francisco";

   console.log(obj);

// 5
var car ={name:"Toyota",model:"Camry",year:2020}
var x=[car.model="Corolla",car.year=2022];
console.log(car);

// 6
var recipe={
   name:"Pasta",
   servings:2,
   ingredians:["noodles","sauce"]
};
recipe.ingredians.push("cheese");
console.log(recipe);3


