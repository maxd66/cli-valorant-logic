import Player from "./lib/Player/Player";
import fs from "fs";

const player1 = new Player();

const getAgentHTML = async (): Promise<string> => {
  const agent = await player1.inquirePlayer();
  const html: string = player1.generateHTML(agent);
  return html;
};

const main = async (): Promise<void> => {
  const agentHtml = await getAgentHTML();
  console.log(agentHtml);
  try {
    fs.writeFileSync("index.html", agentHtml);
  } catch (e) {
    console.log(e);
  }
};

main();
