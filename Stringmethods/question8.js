accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]
 
//1. total number of accounts
console.log(`total number of accounts is ${accounts.length}`);
console.log(`---------------------------------------------------------------`);
//2. print account number whose ac_type is savings
console.log(` account numbers whose ac_type is savings is `)
acc=accounts.filter(acc => acc.ac_type=='savings');
acc.forEach(actno => {
console.log(actno.acno)
    
});
console.log(`---------------------------------------------------------------`);

//3.print the balance of accnount number 1000
 act=accounts.find(ac=>ac.acno).balance
console.log(act);
console.log(`---------------------------------------------------------------`);

//4. print all gpay transactions
// for(ac of accounts){
//   for(act of ac['transaction']){
//     if(act['mode']=='gpay'){
//         console.log(act);
//     }
//   }
// }

//or

act=accounts.map(acc=>acc.transaction).flat(2).filter(md=>md.mode=='gpay').forEach(trans=>console.log(trans))
console.log(`---------------------------------------------------------------`);

//5. print all transaction whose amount > 5000
 accounts.map(acc=>acc.transaction).flat(2).filter(amt=>amt.amount>'5000').forEach(trans=>console.log(trans))
 console.log(`---------------------------------------------------------------`);

//6. print credit transaction of account 1002
console.log("credit transaction of account 1002");
credit=accounts.map(acc=>acc.transaction).flat(2).filter(ac=>ac.to=='1002')
console.log(credit);
console.log(`---------------------------------------------------------------`);

//7. print debit transaction of account 1002
console.log(" debit transaction of account 1002");
debit=accounts.find(acc=>acc.acno=='1002').transaction
console.log(debit);
console.log(`---------------------------------------------------------------`);

//8. print transaction history of 1002
history={}
history["credit"]=credit
history["debit"]=debit
console.log(`transaction history of 1002 is`);
console.log(history);
console.log(`---------------------------------------------------------------`);

//if history needs to be an array then follow the below method

// history=[]
// history.push(credit)
// history.push(debit)
// console.log(history);

//another method using spread operator:to combine 2 array
//but this operator is not giving that much clarity

// transhistory=[...credit,...debit]
// console.log(transhistory);


//9. print highest balance account details
console.log("highest balance account details");
act=accounts.reduce((acc1,acc2)=>acc1.balance>acc2.balance?acc1:acc2)
console.log(act);
console.log(`---------------------------------------------------------------`);
