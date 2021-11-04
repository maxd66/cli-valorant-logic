"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Player_1 = require("../Player/Player");
var Phoenix = /** @class */ (function (_super) {
    __extends(Phoenix, _super);
    function Phoenix(name, kills, radiant) {
        var _this = _super.call(this, name, kills, radiant) || this;
        _this.powers = ["Blaze", "CurveBall", "Hot Hands"];
        _this.ulti = "Run it back";
        return _this;
    }
    Phoenix.prototype.listPowers = function () {
        console.log("Phoenix, played by " + this.username + " has abilities " + this.powers.forEach(function (el) { return el + " "; }) + ", and his ultimate is " + this.ulti);
    };
    return Phoenix;
}(Player_1["default"]));
exports["default"] = Phoenix;
