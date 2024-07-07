//Tradiitonal function

// function add(a,b){
//     return a+b;
// }
// console.log(add(2,5));

//Arrow Function

// const add1 = (a,b) => a + b;

// console.log(add1(2,5));

//Function to find the maximum of two numbers

// traditional

// function max(a,b){
//     return a>b?a:b
// }

// console.log(max(2,5));

//arrow function

// const max1=(a,b)=>a>b?a:b;

// console.log(max1(23,5));

//WAP to find the current age of a person

// traditional method

function age(bornyr,currentyr = 2024,){
    return currentyr-bornyr
}

console.log(age(2001));

//arrow function

const age1= (bornyr,currentyr=2024)=>currentyr-bornyr

console.log(age1(1999));