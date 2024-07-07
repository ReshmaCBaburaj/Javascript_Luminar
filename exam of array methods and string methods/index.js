// 1 ) Car Booking Data
// [id , brand , model , type , pricePerDay, available]
let carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];

// 1)	Print all car brand
console.log("1.Print all car brand")
carBooking.forEach(car=>console.log(car[1]))
console.log("----------------------------------")

// 2)	Print total number of cars available
console.log("total number of cars available")
len=carBooking.length
console.log(len)
console.log("----------------------------------")

// 3)	Print sedan car details
console.log("Print sedan car details")
cr=carBooking.find(car=>car[3]=="Sedan")
console.log(cr)
console.log("----------------------------------")

// 4)	Print car with price per day greater than 60
console.log("Print car with price per day greater than 60")
cr=carBooking.filter(car=>car[4]>60)
cr.forEach(sixty=>console.log(sixty[1]))
console.log("----------------------------------")

// 5)	Print details of jeep wrangler
console.log("Print details of jeep wrangler")
cr=carBooking.find(car=>car[1]=="Jeep" && car[2]=="Wrangler")
console.log(cr[4])
console.log("----------------------------------")



// 6)	Arrange cars based on the descending order of price per day
console.log("Arrange cars based on the descending order of price per day")
cr=carBooking.sort((a1,a2)=>a2[4]-a1[4])
console.log("----------------------------------")


// 7)	Sort car based on ascending order of available cars.

console.log("Sort car based on ascending order of available cars.")
cr=carBooking.sort((a1,a2)=>a1[5]-a2[5])
console.log(cr)
console.log("----------------------------------")

// 8)	Find the car with highest availability

console.log("the car with highest availability")
cr=carBooking.reduce((n1,n2)=>n1[5]>n2[5]?n1[5]:n2[5])

console.log(cr)
console.log("----------------------------------")

// 9)	Find the revenue if all the cars are rented for a day
console.log("the revenue if all the cars are rented for a day")
revenue=carBooking.map(a1=>a1[5])
console.log("----------------------------------")

// console.log(revenue)
total=revenue.reduce((a1,a2)=>a1+a2)
console.log(`total revenue is ${total}`)
console.log("----------------------------------")

// 10)	Count the number of sedan car available

cr=carBooking.filter(a1=>a1[3]=='Sedan')
// console.log(cr)
console.log(` total no.of sedan car is ${cr.length}`)
console.log("----------------------------------")

// 11)	 Find the car with lowest availability

cr=carBooking.reduce((n1,n2)=>n1[5]<n2[5]?n1:n2)
console.log(`car with lowest avaiablity is ${cr[1]}`)
console.log("----------------------------------")

// 12)	Print all car models

// cr=carBooking.forEach(n1=>console.log(n1[1]))
//or
d1=carBooking.map(n1=>n1[1])
console.log(` car models are ${d1}`);
console.log("----------------------------------")

// 13)	Print total number of cars available
console.log(`total number of cars are ${d1.length}`);
console.log("----------------------------------")

// 14)	Find the details of the car with type – mustang
mus=carBooking.filter(d1=>d1[2]=='Mustang')
mus.forEach(must=>console.log(`details of the car with model- mustang ${mus}`))
console.log("----------------------------------")

// 15)	Check if there is any car with price per day exactly 55

pr=carBooking.filter(p=>p[4]==55)
pr.forEach(pri=>console.log(`car with price per day exactly 55 is ${pri[1]}`))
console.log("----------------------------------")

//2) 
const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ] 

// 1) find the sum of all numbers in the nested array. 
c=data.flat(2)
// console.log(c)
sum=c.reduce((a1,a2)=>a1+a2)
console.log(`sum of all numbers in the nested array ${sum}`)
console.log("----------------------------------")

// 2) find the largest and the smallest number 
big=c.reduce((a1,a2)=>a1>a2?a1:a2)
console.log(`largest is ${big}`)
console.log("----------------------------------")

small=c.reduce((a1,a2)=>a1<a2?a1:a2)
console.log(`smallest is ${small}`)
console.log("----------------------------------")

// 3) find the average of all numbers in the given array. 

avg=c.reduce((a1,a2)=>(a1+a2)/2)
console.log(avg);


//3) string 

str="reshma"

//1)Write a JavaScript function that checks whether a string ends with a specified suffix. 
c=str.endsWith('a')
console.log(c)
console.log("----------------------------------")

//2)Write a JavaScript program to find the most frequent character in a given string. 

//3) Write a JavaScript function to split a string and convert it into an array of words. 

//4) Write a function that determines if two strings are anagrams of each other 