"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name, kills, radiant) {
        this.username = name;
        this.killCount = kills;
        this.radiant = radiant;
    }
    Player.prototype.getInfo = function () {
        console.log(this.username + " has killed " + this.killCount + " other players, and " + (this.radiant ? "is" : "is not") + " radiant.");
    };
    Player.prototype.addKill = function () {
        console.log("Boom Headshot!");
        this.killCount++;
    };
    return Player;
}());
exports["default"] = Player;
