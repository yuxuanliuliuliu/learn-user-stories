import { Bank } from '../src/bank';

// setup

const accounts = [{ id: 1234567890, balance: 3448 },
{ id: 1234567891, balance: 2424 }];

const usernames = ['user1', 'user2'];
const bank = new Bank(accounts, usernames);

// Scenario 1: customer is able to create a new bank account
const acc = bank.createAccount('user1', 23, 1234567892);
if(acc.id !== 1234567892 || acc.balance !== 0 || acc.id.toString().length !== 10) {
    console.log('Scenario 1 failed');
}
else {
    console.log('Scenario 1 passed');
}

try {
    const acc1 = bank.createAccount('user1', 23, 1234567892);
    console.log('Scenario 1 failed');   
}
catch(e) {
    console.log('Scenario 1 passed');
}

// Scenario 2: customer is unable to create a new bank account due to invalid age

try {
    bank.createAccount('user1', 17, 1234567893);
    console.log('Scenario 2 failed');
}
catch(e) {
    console.log('Scenario 2 passed');
}

// Scenario 3: customer is unable to create a new bank account due to invalid username

try {
    bank.createAccount('user3', 23, 1234567894);
    console.log('Scenario 3 failed');
}
catch(e) {
    console.log('Scenario 3 passed');
}
console.log('-----------user story2: deposit-----------');
// deposit test scenario 1: user is able to deposit money into the account
try{
    let balance = bank.depositMoney('user1', 1234567890, 1000)
    let expected: number = 4448
    if (balance != expected) {
        console.log('scenario 1 fialed. expected: 4448 but got', balance)
    } else{
        console.log('scenario 1 passed!')
    }
} catch(e){
    console.log('scenario 1 failed, an error occured')
}

// deposit test scenario 2: user is unable to deposit money due to incorrect username
try{
    let balance = bank.depositMoney('user4', 1234567890, 1000)
    console.log('scenario 2 failed, expected error message but none')
} catch(e){
    console.log('scenario 2 passed')
}

// deposit test scenario 2: user is unable to deposit money due to incorrect account number
try{
    let balance = bank.depositMoney('user2', 12345678, 1000)
    console.log('scenario 2 failed, expected error message but none')
} catch(e){
    console.log('scenario 2 passed')
}
