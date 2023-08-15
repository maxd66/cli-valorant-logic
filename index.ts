import * as fs from "fs";

import Player from "./lib/Player/Player";
import HTML from "./lib/HTML/HTML";
import Match from "./lib/Match/Match";

const player1 = new Player();
const match = new Match();
const htmlClass = new HTML();

const getAgent = async (): Promise<string> => {
  const agent = await player1.inquirePlayer();
  return agent;
};

const getMap = async (): Promise<string> => {
  const map = await match.inquireMap();
  return map;
};

const main = async (): Promise<void> => {
  const agent = await getAgent();

  const map = await getMap();

  const genHTML = htmlClass.writePage(agent, map);

  try {
    fs.writeFileSync("./public/index.html", genHTML);
    console.log(
      "Website generated!!! Find it in the public folder, it is titled index.html"
    );
  } catch (e) {
    console.log("Oh no there was a problem generating your website.");
    console.log(e);
  }
};

main();
