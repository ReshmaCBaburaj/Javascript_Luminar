function addition(a,b){
    c=a+b;
    return c;
}
console.log(addition(1,2));

function add(a,b){
    c=a+b;
    console.log(c);
}

add(3,5);

//subtraction using conditional operator

function sub(a,b){
   a>=b?c=a-b:c=b-a;
    return c
}

console.log(sub(3,3));

// write a function to find cube of a Number

function cube(a){
    return a*a*a
}
console.log(3);

//check a number is odd or even?

function odd(n){
    return n%2==0?"even":"odd"
}

console.log(odd(3));
