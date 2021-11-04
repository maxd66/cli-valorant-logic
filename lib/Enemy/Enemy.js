"use strict";
exports.__esModule = true;
var Enemy = /** @class */ (function () {
    function Enemy(name, ssn) {
        this.name = name;
        this.ssn = ssn;
    }
    Enemy.prototype.printSsn = function () {
        console.log(this.ssn);
    };
    Enemy.prototype.printName = function () {
        console.log(this.name);
        this.printSsn();
    };
    Enemy.prototype.changeSsn = function (number) {
        this.ssn = number;
    };
    Enemy.prototype.changeNameAndSsn = function (name, number) {
        this.name = name;
        this.changeSsn(number);
    };
    return Enemy;
}());
exports["default"] = Enemy;
