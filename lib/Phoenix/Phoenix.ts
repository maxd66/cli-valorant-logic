import Player from "../Player/Player";

class Phoenix extends Player {
  powers: string[];
  ulti: string;
  constructor(name: string, kills: number, radiant: boolean) {
    super(name, kills, radiant);
    this.powers = ["Blaze", "CurveBall", "Hot Hands"];
    this.ulti = "Run it back";
  }

  listPowers() {
    console.log(
      `Phoenix, played by ${this.username} has abilities ${this.powers.forEach(
        (el) => `${el} `
      )}, and his ultimate is ${this.ulti}`
    );
  }
}

export default Phoenix;
