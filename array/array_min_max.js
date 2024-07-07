//To hold an expense

var expenses =[12000,20000,34000,10000,28000,15000,50000];


//Find total expense
sum=0
for(exp of expenses){
    sum=sum+exp
}
console.log(`Total expense is ${sum}`);

//Find Maximum expense
var maxExp=0
for(i of expenses){
  if(maxExp<i){ //0<12000,12000<20000,34000<10000:no,34000<28000:no,34000<50000:yes so maxexp is 50000
    maxExp=i
  }
}
console.log("maximum expense is "+maxExp);
//Find minimum expense
var minExp=expenses[0]
for(amount of expenses){
  if(amount<minExp){ 
    minExp=amount
  }
}

console.log("minimum expense is",minExp);

