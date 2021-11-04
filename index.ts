import Phoenix from "./lib/Phoenix/Phoenix";
import Player from "./lib/Player/Player";

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
