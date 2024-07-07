/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */


var vowels="aeiou"
var v=''
var c=''
function vowelsAndConsonants(s) {
    for(i=0;i<s.length;i++){
        for(j=0;j<vowels.length;j++){
            if(s[i]==vowels[j]){
             v+=s[i]
            }
            else{
                c+=s[i]+ '\n'
            }
            
        }
        

    }
    for(x of v){
        console.log(x);
    }
    // console.log(c);
}


vowelsAndConsonants("javscriptloops")


