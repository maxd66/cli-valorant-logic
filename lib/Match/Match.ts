import { prompt } from "inquirer";

class Match {
  maps: string[];
  constructor() {
    this.maps = [
      "Ascent",
      "Bind",
      "Breeze",
      "Fracture",
      "Haven",
      "Icebox",
      "Split",
    ];
  }

  async inquireMap(): Promise<string> {
    let chosenMap: string = ``;
    await prompt([
      {
        type: "list",
        name: "map",
        message: "Please select the map you are playing on.",
        choices: this.maps,
      },
    ]).then((answers) => {
      chosenMap = answers.map;
    });
    if (chosenMap) {
      console.log("---Map locked in!\n");
    }
    return chosenMap;
  }
}

export default Match;
