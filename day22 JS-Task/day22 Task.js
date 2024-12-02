// task:
// ------
const products = [
    { id: 101, name: "Smartphone", price: 699.99, category: "Electronics", inStock: true, ratings: 4.5 },
    { id: 102, name: "Laptop", price: 1199.99, category: "Computers", inStock: false, ratings: 4.7 },
    { id: 103, name: "Wireless Headphones", price: 199.99, category: "Accessories", inStock: true, ratings: 4.3 },
    { id: 104, name: "Smartwatch", price: 149.99, category: "Wearables", inStock: true, ratings: 4.2 },
    { id: 105, name: "Gaming Console", price: 499.99, category: "Gaming", inStock: true, ratings: 4.8 }
  ];
  
  // 1.Write a function that returns an array of all product names in uppercase.
  
  let funNames=products.map((funname)=>{
    return funname.name.toUpperCase()
  })
  console.log(funNames); //output: ['SMARTPHONE','LAPTOP','WIRELESS HEADPHONES','SMARTWATCH','GAMING CONSOLE']
  
  // 2.Write a function that logs each product's name and price to the console.
  
  let productnName=products.forEach((more)=>{
    // return 
  console.log(`${more.name}: Rs.${more.price}`);
  
  })
  
  
  
  // 3.Write a function that returns an array of products that are in stock.
  
  let inStock=products.filter((arr)=>{
    return arr.inStock
  })
  console.log(inStock);
  
  
  
  // 4.Write a function that finds the first product with a rating higher than 4.5 find
  
  let find=products.find((find)=>{
    return find.ratings>4.5
  })
  console.log(find); 
  
  
  
  // 5.Write a function that returns the index of the first product in the "Gaming" findindex
  
  let findIndex=products.findIndex((product)=>{
    return product.category=="Gaming"
  })
  console.log(findIndex); //output: 4
  
  // 6.Write a function that checks if all products are in stock. every
  
  let every=products.every((every)=>{
    return every.inStock==true
  })
  console.log(every); //output: false
  
  
  // 7.Write a function that checks if any product has a price lower than $200. sum
  
  let price=products.some((price)=> price.price<200);
  
  console.log(price); //output: true
  