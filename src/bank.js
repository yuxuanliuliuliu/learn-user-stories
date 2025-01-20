"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
/**
 * Bank class implements the BankType interface
 * and stores accounts and usernames
 * and is able to create new accounts
 */
var Bank = /** @class */ (function () {
    /**
     *
     * @param accounts - a list of accounts to be stored in the bank
     * @param usernames - a list bank verified usernames
     * @returns a new Bank object
     */
    function Bank(accounts, usernames) {
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
    Bank.prototype.isUsernameExists = function (username) {
        return this.usernames.includes(username);
    };
    /**
     *
     * @param accountNumber - a number representing the account number
     * @returns an AccountType object if the account exists, undefined otherwise
     */
    Bank.prototype.findAccount = function (accountNumber) {
        return this.accounts.find(function (account) { return account.id === accountNumber; });
    };
    /**
     *
     * @param accountNumber - a number representing the account number
     * @returns true if the account number has 10 digits, false otherwise
     */
    Bank.prototype.isAccountNumberValid = function (accountNumber) {
        return accountNumber.toString().length === 10;
    };
    /**
     *
     * @param username - a string representing the username of the customer
     * @param age - a number representing the age of the customer
     * @param accountNumber - a number representing the account number of the customer that needs to be created
     * @returns a new account of type AccountType
     */
    Bank.prototype.createAccount = function (username, age, accountNumber) {
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
        var newAccount = {
            id: accountNumber,
            balance: 0
        };
        this.accounts.push(newAccount);
        return newAccount;
    };
    /**
     *
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number of the customer
     * @param moneyToDeposit - a number represening the money custmer wish to deposit
     * @returns a new bank balance
     */
    Bank.prototype.depositMoney = function (username, accountNumber, moneyToDeposit) {
        if (!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        var account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("cannot find account, deposit money failed");
        }
        account.balance += moneyToDeposit;
        return account.balance;
    };
    /**
     *
     * @param username - a string representing the username of the customer
     * @param accountNumber - a number representing the account number of the customer
     * @param moneyToDeposit - a number represening the money custmer wish to withdraw
     * @returns a new bank balance
     */
    Bank.prototype.withdrawMoney = function (username, accountNumber, moneyToWithdraw) {
        if (!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        var account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("cannot find account, deposit money failed");
        }
        if (account.balance < moneyToWithdraw) {
            throw new Error('insufficient balance');
        }
        account.balance -= moneyToWithdraw;
        return account.balance;
    };
    Bank.prototype.checkBalance = function (username, accountNumber) {
        if (!this.isUsernameExists(username)) {
            throw new Error('User no found');
        }
        var account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("cannot find account, deposit money failed");
        }
        var amount = account.balance;
        return amount;
    };
    return Bank;
}());
exports.Bank = Bank;
