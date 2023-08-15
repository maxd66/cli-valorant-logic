import * as fs from "fs";

import Player from "../lib/Player/Player";
import Match from "../lib/Match/Match";
import MD from "../lib/MD/MD";

const player1 = new Player();
const match = new Match();
const mdClass = new MD();

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

  const genMD = mdClass.writeMD(agent, map);

  try {
    fs.writeFileSync("../public/markdown/valorandom.md", genMD);
    console.log(
      "Markdown generated!!! Find it in the public/markdown folder, it is titled valorandom.md"
    );
  } catch (e) {
    console.log("Oh no there was a problem generating your markdown.");
    console.log(e);
  }
};

main();
