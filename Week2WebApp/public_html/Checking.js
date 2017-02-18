/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//constructor with instance variables (attributes)
function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount){
    this.balance  += amount;
}

function withdraw(amount){
    if(amount <= this.balance){
        this.balance -= amount;
    }
    if(amount > this.balance){
        document.write("Insufficient funds");
    }
}

function toString(){
    return "Balance: " + this.balance;
}


