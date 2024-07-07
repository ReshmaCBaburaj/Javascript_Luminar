//sorting of an array

// var arr=[44,170,56,100,34,64,150,23,11,12,1]

// console.log(arr.sort((a,b)=>a-b));

// console.log(arr.sort((a,b)=>b-a));

// var vehicle=["Bus","Car","bike","Cycle"];

// console.log(vehicle.sort());//it will sort according to alphabetic order.Give priority to capital letters then only smalll letters
// console.log(vehicle.reverse());

// console.log(vehicle.sort((a,b)=>a.localeCompare(b)));//it will sort according to alphabetic order.but not giving more priority to capital letters more

// console.log(vehicle.sort((a,b)=>b.localeCompare(a)));

var points=[40,100,1,5,25,10];

//Given an array of numbers and perform sorting



//1.ascending order of the numbers
console.log("ascending order of the numbers");

console.log(points.sort((a,b)=>a-b));

//2.descending order of the numbers

console.log(points.sort((a,b)=>b-a));
console.log("descending order of the numbers");

//3.find the lowest number
a=points.sort((a,b)=>a-b)
console.log(a);
console.log("lowest element is",a[0]);
high=a.length
console.log("highest element is",a[5]);
//4.find the highest number