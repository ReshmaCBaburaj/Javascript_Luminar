// print all vowels in the string

str="Hai Hello"

vowels=['a','e','i','o','u','A','E','I','O','U']

// console.log(Array.from(str));

// Array.from(str).filter(char=>vowels.includes(char)).forEach(item=>console.log(item));

//find the number of vowels in an array using array methods

const strings=["Hello","How","Are","You"];

let strvowels=strings.map(str=>Array.from(str).filter(item=>'AEIOUaeiou'.includes(item)).length);
console.log(strvowels);