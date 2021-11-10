import * as inquirer from "inquirer";

class Player {
  agents: string[];

  constructor() {
    this.agents = [
      "Astra",
      "Brimstone",
      "Breach",
      "Cypher",
      "Jett",
      "Kay/O",
      "Killjoy",
      "Omen",
      "Phoenix",
      "Raze",
      "Reyna",
      "Sage",
      "Skye",
      "Sova",
      "Viper",
      "Yoru",
    ];
  }
  async inquirePlayer(): Promise<string> {
    const options: object[] = this.agents.map((val) => {
      return { name: val, value: val, checked: true };
    });
    let ans: string = ``;
    await inquirer
      .prompt([
        {
          name: "agent",
          message:
            "Please choose agents you would like to include in the random selection. (All are selected by default)",
          type: "checkbox",
          choices: options,
        },
      ])
      .then((answers) => {
        ans = this.randomize(answers.agent);
      });
    return ans;
  }
  private randomize(arr: string[]): string {
    const r: number = Math.floor(Math.random() * arr.length);
    return arr[r];
  }
}

export default Player;
