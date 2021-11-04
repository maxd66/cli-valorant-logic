import Phoenix from "./lib/Phoenix/Phoenix";
import Player from "./lib/Player/Player";
import Enemy from "./lib/Enemy/Enemy";

const dk = new Player("dark_knight", 100, true);

const leviathon = new Player("leviathon", 50, false);

const phoenix = new Phoenix(dk.username, 101, dk.radiant);

dk.getInfo();
console.log("-");
leviathon.getInfo();
console.log("-");
dk.addKill();
console.log("-");
dk.getInfo();
console.log("-");
phoenix.listPowers();
console.log("-");
phoenix.addKill();
phoenix.addKill();
console.log("-");
phoenix.getInfo();
console.log("------------------------");
console.log("------------------------");
console.log("------------------------");
console.log("------------------------");

const bob = new Enemy("Robert", 3394485577);

bob.printName();
console.log("---");
bob.changeNameAndSsn("Jane", 1102293384);
console.log("---");
bob.printName();
