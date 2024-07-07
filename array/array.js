//generate a new array the values are subtracted from the total sum of the values
//input: var arr=[4,5,6]:sum =15
//output: var arr=[11,10,9]

arr=[4,5,6]


sum=15
for(i=0;i<arr.length;i++){
   arr[i]=sum-arr[i]
}

console.log(arr);
