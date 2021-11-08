import Player from "./lib/Player/Player";
import HTML from "./lib/HTML/HTML";
import fs from "fs";

const player1 = new Player();
const htmlClass = new HTML();

const getAgent = async (): Promise<string> => {
  const agent = await player1.inquirePlayer();
  return agent;
};

const main = async (): Promise<void> => {
  const agent = await getAgent();
  const genHTML = htmlClass.writePage(agent);
  try {
    fs.writeFileSync("./public/index.html", genHTML);
  } catch (e) {
    console.log(e);
  }
};

main();
