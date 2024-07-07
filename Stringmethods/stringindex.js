str="malayalam"
console.log(str[3])

//w.ap.p to check whether the given number is palindrome or not
//eg:malayalam

///below is my method
// len=str.length
// console.log(len)
// rev=''
// for(i=len-1;i>=0;i--){
//     rev=rev+str[i];
    
// }
// console.log(rev);

// if(str==rev){
//     console.log("palindrome")
// }
// else{
//     console.log("not palindrome")
// }

//another method is below
str="malayalam"
// console.log(str[3])
start=0;
end=str.length;
palindrome=false;
while(start<end){
    if(str[start]!=str[end]){
        palindrome=true;
        
    }
    start++;
    end--;
    
}
console.log(palindrome?'palindrome':'not palindrome')

