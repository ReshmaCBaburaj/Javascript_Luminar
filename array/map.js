//map() -create a new array by calling function for every array element

//return a new array with the square of all element values

a=[10,11,12,13,14];//old array

function square(num){
    return num**2
}

console.log(square(10));
//map use cheythu array il ulla ellaa element um nammal parayunna function apply aakkum
console.log(" a new array with the square of all element values");

console.log(a.map(num=>num**2));

//Multiply all the values in an array with 10
console.log("Multiply all the values in an array with 10");

var number=[65,44,12,4];

console.log(number.map((num)=>num*10));

//return a new array with the square root of all elements

a=[4,9,16,25];
console.log(a.map(num=>Math.sqrt(num)));

//create an array of numbers if number>=5 then do number+1 else do number-1

a=[1,2,3,4,5,6,7]

//output: [0,1,2,3,6,7,8]

console.log(a.map(num=>num>=5?num+1:num-1));

