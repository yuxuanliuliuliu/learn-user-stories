import { BankType, AccountType } from './types';

/**
 * Bank class implements the BankType interface
 * and stores accounts and usernames
 * and is able to create new accounts
 */

export class Bank implements BankType {

    private accounts: AccountType[] = [];
    private usernames: string[] = [];

    /**
     * 
     * @param accounts - a list of accounts to be stored in the bank
     * @param usernames - a list bank verified usernames
     * @returns a new Bank object
     */
    public constructor(accounts: AccountType[], usernames: string[]) {
        this.accounts = accounts;
        this.usernames = usernames;
    }

    /**
     * 
     * @param username - a string representing the username
     * @returns true if the username exists in the bank, false otherwise
     */
    private isUsernameExists(username: string): boolean {
        return this.usernames.includes(username);
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @returns an AccountType object if the account exists, undefined otherwise
     */
    private findAccount(accountNumber: number): AccountType | undefined {
        return this.accounts.find(account => account.id === accountNumber);
    }

    /**
     * 
     * @param accountNumber - a number representing the account number
     * @returns true if the account number has 10 digits, false otherwise
     */
    private isAccountNumberValid(accountNumber: number): boolean {
        return accountNumber.toString().length === 10;
    }

    /**
     * 
     * @param username - a string representing the username of the customer
     * @param age - a number representing the age of the customer
     * @param accountNumber - a number representing the account number of the customer that needs to be created
     * @returns a new account of type AccountType
     */
    createAccount(username: string, age: number, accountNumber: number): AccountType {
        if(!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        if(!this.isAccountNumberValid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if(this.findAccount(accountNumber)) {
            throw new Error('Account already exists');
        }

        if(age < 18) {
            throw new Error('Age must be 18 or above');
        }
        
        const newAccount: AccountType = {
            id: accountNumber,
            balance: 0
        }

        this.accounts.push(newAccount);
        return newAccount;
    }

    /**
     * 
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number of the customer
     * @param moneyToDeposit - a number represening the money custmer wish to deposit
     * @returns a new bank balance
     */
    depositMoney(username: string, accountNumber: number, moneyToDeposit: number): number | undefined {
        if(!this.isUsernameExists(username)){
            throw new Error('User no found');
        }
       const account = this.findAccount(accountNumber);
       if (!account){
        throw new Error("cannot find account, deposit money failed");
    }
        account.balance += moneyToDeposit
        return account.balance
    }

    /**
     * 
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number of the customer
     * @param moneyToDeposit - a number represening the money custmer wish to withdraw
     * @returns a new bank balance
     */
    withdrawMoney(username: string, accountNumber: number, moneyToWithdraw: number): number | undefined {
        if(!this.isUsernameExists(username)){
            throw new Error('User no found');
        }
       const account = this.findAccount(accountNumber);
       if (!account){
        throw new Error("cannot find account, deposit money failed");
    }
    if( account.balance < moneyToWithdraw) {
        throw new Error('insufficient balance')
    }
    account.balance -= moneyToWithdraw
    return account.balance
    }
}