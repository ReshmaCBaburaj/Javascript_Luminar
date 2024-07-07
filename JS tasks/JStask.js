// 1) Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz." For numbers that are multiples of both three and five, print "FizzBuzz."

for(i=1;i<=100;i++){
    // console.log(i);
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
  
    else{
        console.log(i);
    }
}
console.log('----------------------------------------------------');

// 2) Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]



// 3) Sample data with nested arrays 
 const data = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12] ];

//  1) Find the sum of all numbers in the nested arrays.
console.log("the sum of all numbers in the nested arrays: ");
c=data.flat();
// console.log(c)
 s=c.reduce((sum1,sum2)=>sum1+sum2);
 console.log(s)
 console.log('----------------------------------------------------');
//  2) Find the maximum number in the entire nested array.
console.log("the maximum number in the entire nested array.");
max=c.length
console.log(max);

console.log('----------------------------------------------------');
//  3) Find the average of all numbers in the nested arrays.
console.log("the average of all numbers in the nested arrays.");
  avg=c.reduce((s1,s2)=>(s/max))
  console.log(avg);

  console.log('----------------------------------------------------');

//   4) Find square of each number in the nested arrays.
console.log("square of each number in the nested arrays.");
sq=c.map(s1=>s1**2)
console.log(sq);
console.log('----------------------------------------------------');

  
//   5) Find all even numbers from the nested arrays.
console.log("all even numbers from the nested arrays.");

even=c.filter(num=>num%2==0)
console.log(even);
console.log('----------------------------------------------------');

// 6) Use reduceRight to concatenate all nested arrays in reverse order.

// 7) create a flattened array from the nested arrays.
 
// 8) check if the number 5 is present in any of the nested arrays
console.log("check if the number 5 is present in any of the nested arrays");
fi=data.some(num=>num.includes(5))
 console.log(fi?'yes':'no');
 console.log('----------------------------------------------------');
// 9) create a single string of all numbers separated by a comma. 
 
//  10) Print each number in the nested arrays.
 data.flat().forEach(num=> {
    console.log(num);
 });
// 11) Sort the nested arrays based on the sum of their numbers.

// 12) Use map to get the product of the first and last number in each nested array.
 
// 13) Use filter to get all arrays where the sum of numbers is greater than 15.
 
// 14) Use reduce to find the product of all numbers in the nested arrays.
 
//  15) create an array of square roots of all numbers in the nested arrays.
 
// 16) Use includes to check if the number 20 is present in any of the nested arrays.
 
// 17) Use map to convert each number in the nested arrays to its string representation.
 
// 18) Use filter to get all arrays where the length is greater than 2
 
// 19) Use reduceRight to flatten and concatenate all nested arrays in reverse order.
 
//  20) Use arrayFrom to create an array of squares of all even numbers in the nested arrays.
 
// 21) Sort the nested arrays based on the length of each array.
 
// 22) Use map to convert each number in the nested arrays to its negative.
 
// 23) Use filter to get all arrays where the last number is greater than 10.
 
//  24) Use reduceRight to get the difference between consecutive numbers in each nested array.
 
// 25) Use arrayFrom to create an array of square roots of all even numbers in the nested arrays.
 
//  26) Use includes to check if the number 15 is present in any of the nested arrays.
 
// 27) Use map to convert each number in the nested arrays to its absolute value.
 
// 28) Use filter to get all arrays where the first number is less than 5.
 
// 29) Use reduceRight to concatenate and flatten all nested arrays in reverse order.
 
// 30) Use arrayFrom to create an array of numbers greater than 5 from the nested arrays.
 