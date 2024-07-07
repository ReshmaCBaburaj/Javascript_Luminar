pattern=`ABCBBCAACB`
//w.a.p to find the first recursive letter

char=pattern.split('')
console.log(char);
obj={}

for(ch of char){
    if(ch in obj){
        console.log(`first recursive character is ${ch}`)
        break;
    }
    else{
        obj[ch]=1;
    }
   
}
