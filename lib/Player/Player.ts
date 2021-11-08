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
          name: "test",
          message: "this is a test",
          type: "checkbox",
          choices: options,
        },
      ])
      .then((answers) => {
        ans = this.randomize(answers.test);
      });
    return ans;
  }
  private randomize(arr: string[]): string {
    const r: number = Math.floor(Math.random() * arr.length);
    return arr[r];
  }
}

export default Player;
