class bank{
    //property

    accountDetails={
        1000:{
            acno:1000,
            username:'userone',
            password:'userone',
            balance:50000
        },
        1001:{
            acno:1001,
            username:'usertwo',
            password:'usertwo',
            balance:40000
        },
        1002:{
            acno:1000,
            username:'userthree',
            password:'userthree',
            balance:50000
        }
    }
    //method
    //validate a given account number
    //to check that account number is present or not
    validate(acc_no){
       return  acc_no in this.accountDetails?true:false;
    }


    //authenticate an account
    //account undenkil password um koode match aayitt varanam

  
    authenticate(acc_no,pass){
        if(this.validate(acc_no)){
            if(this.accountDetails[acc_no].password==pass){
                console.log('authentication successfull');
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('inavlid account');
        }
    }

    //check the balance
    balance(acc_no,pass){
        if(this.validate(acc_no)){
            if(this.accountDetails[acc_no].password=pass){
                console.log(`balance of account ${acc_no} is ${this.accountDetails[acc_no].balance}`);
            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('account is invalid');
        }
    }

    // fund transfer
    fund(fromacc_no,toacc_no,fpwd,amount){
        if(this.validate(fromacc_no)&&this.validate(toacc_no)){
            if(this.accountDetails[fromacc_no].password==fpwd){
                console.log(`current balance of ${fromacc_no} before fund transfer is ${this.accountDetails[fromacc_no].balance}`);

                console.log(`current balance of ${toacc_no} before fund transfer is ${this.accountDetails[toacc_no].balance}`);

                this.accountDetails[fromacc_no].balance-=amount
                this.accountDetails[toacc_no].balance+=amount
                console.log(this.accountDetails[toacc_no].balance);
                console.log(`current balance of ${fromacc_no} after fund transfer is ${this.accountDetails[fromacc_no].balance}`);

                


            }
            else{
                console.log('invalid password');
            }
        }
        else{
            console.log('invalid accounts');
        }
    }
}

//validate a given account number
//to check that account number is present or not
const obj=new bank()
console.log(obj.validate(1001)?'account is valid':'invalid account');
//authenticate an account
//account undenkil password um koode match aayitt varanam
obj.authenticate(1001,'usertwo');
const obj1=new bank()
obj1.balance(1001,'usertwo')

obj1.fund(1000,1001,'userone','100')

//check the balance

