//print pairs whose sum=9

var arr=[2,3,4,5]
sum=9

// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//             console.log(arr[i],arr[j]);
//         }
//     }
// }
counter=1
for(let i of arr){
    counter++
    for(let j of arr){
        if(i+j==9){
            console.log(`pairs are ${i},${j}`);
        }
    }
}
console.log("iteration count is ",counter);

