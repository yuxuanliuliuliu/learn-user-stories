"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
/**
 * Bank class implements the BankType interface
 * and stores accounts and usernames
 * and is able to create new accounts
 */
class Bank {
    /**
     *
     * @param accounts - a list of accounts to be stored in the bank
     * @param usernames - a list bank verified usernames
     * @returns a new Bank object
     */
    constructor(accounts, usernames) {
        this.accounts = [];
        this.usernames = [];
        this.accounts = accounts;
        this.usernames = usernames;
    }
    /**
     *
     * @param username - a string representing the username
     * @returns true if the username exists in the bank, false otherwise
     */
    isUsernameExists(username) {
        return this.usernames.includes(username);
    }
    /**
     *
     * @param accountNumber - a number representing the account number
     * @returns an AccountType object if the account exists, undefined otherwise
     */
    findAccount(accountNumber) {
        return this.accounts.find(account => account.id === accountNumber);
    }
    /**
     *
     * @param accountNumber - a number representing the account number
     * @returns true if the account number has 10 digits, false otherwise
     */
    isAccountNumberValid(accountNumber) {
        return accountNumber.toString().length === 10;
    }
    /**
     *
     * @param username - a string representing the username of the customer
     * @param age - a number representing the age of the customer
     * @param accountNumber - a number representing the account number of the customer that needs to be created
     * @returns a new account of type AccountType
     */
    createAccount(username, age, accountNumber) {
        if (!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        if (!this.isAccountNumberValid(accountNumber)) {
            throw new Error('Invalid account number');
        }
        if (this.findAccount(accountNumber)) {
            throw new Error('Account already exists');
        }
        if (age < 18) {
            throw new Error('Age must be 18 or above');
        }
        const newAccount = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(newAccount);
        return newAccount;
    }
    depositMoney(username, accountNumber, moneyToDeposit) {
        if (!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("cannot find account, deposit money failed");
        }
        account.balance += moneyToDeposit;
        return account.balance;
    }
}
exports.Bank = Bank;
