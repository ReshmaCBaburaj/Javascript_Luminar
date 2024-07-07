//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
// products.forEach(pdt=>{
//    console.log(pdt[1])
// })

//or 

// a=products.map(pdt=>pdt[1])
// console.log(a)

//2. display product whose price < Rs.50
//  c=products.filter(pdt=>pdt[2]<50).forEach(thirty=>console.log(thirty[1]))
//  console.log(c)

//or
//  products.filter(pdt=>pdt[2]<50).forEach(thirty=>console.log(thirty))

//3. print price of oreo
 //d=products.filter(pdt=>pdt[1]=='oreo').forEach(oreo=>console.log(oreo[2]))
//or
// oreo=products.find(pdt=>pdt[1]=='oreo');
// console.log(oreo[2])
 //4. print costly product name
// costly=products.reduce((pdt1,pdt2)=>pdt1[2]>pdt2[2]?pdt1:pdt2)
//  console.log(costly)
//5. display out of stock product

//better to use filter because more than one out of stock product will be there
//  outofstock=products.find(pdt=>pdt[3]<=0)
//  console.log(outofstock[1])

//or
//  products.filter(pdt=>pdt[3]<=0).forEach(outstock=>console.log(outstock[1]))
 
//6. sort products based on stock in decsending order
//  desc=products.sort((pdt1,pdt2)=>pdt2[3]-pdt1[3])
//  console.log(desc)
//7. print product having maximum available stock
//  max=products.reduce((pdt1,pdt2)=>pdt1[3]>pdt2[3]?pdt1:pdt2)
// console.log(max[1])

//8. is there any product can be purchased by Rs. 10
// ten=products.find(pdt=>pdt[3]=='10')
// console.log(ten[1])
// ten=products.some(pdt=>pdt[3]=='10')
// console.log(ten?'yes':'no')
//9. Is there any product price in the range of 10 to 30
// price=products.some(pdt=>pdt[2]>=10 && pdt[2]<=30)
// console.log(price?'yes':'no')
//10. print all products in the range of 10 to 30
// price=products.filter(pdt=>pdt[2]>=10 && pdt[2]<=30)
// price.forEach(pdt1=>console.log(pdt1[1]))