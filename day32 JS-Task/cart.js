let data=JSON.parse(localStorage.getItem("productDetails"))

parent=document.getElementById("parent")

 emp=[]
 let newdata=data.map((val)=>{
     
     child=document.createElement("div")
     childa=document.createElement("div")
     childb=document.createElement("div")
     childc=document.createElement("div")
     childd=document.createElement("div")
     img=document.createElement("img")
     // btn=document.createElement("button")


     childa.innerText=val.id
     childb.innerText=val.title
     childc.innerText=val.category
     childd.innerText=val.price
     img.src=val.image
     // btn.innerText="add to cart"
     
     parent.append(child)
     child.append(img,childa,childb,childc,childd)
     
 })

