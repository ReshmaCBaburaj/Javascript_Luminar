str="Luminar Technolab"

console.log(Array.from(str));

let x=Array.from(str).map(char=>char.toUpperCase());
console.log(x);

Array.from(str).map(char=>char.toUpperCase()).forEach(item=>console.log(item));