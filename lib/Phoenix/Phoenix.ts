import Player from "../Player/Player";

class Phoenix extends Player {
  powers: string[];
  ulti: string;
  constructor(name: string, kills: number, radiant: boolean) {
    super(name, kills, radiant);
    this.powers = ["Blaze", "CurveBall", "Hot Hands"];
    this.ulti = "Run it back";
  }

  protected createPowerString(arr: string[]): string {
    let powerString: string = "";
    for (let i = 0; i < this.powers.length; i++) {
      if (i === 0) {
        powerString += this.powers[i];
      } else {
        powerString += `, ${this.powers[i]}`;
      }
    }
    return powerString;
  }

  listPowers() {
    console.log(
      `Phoenix, played by ${
        this.username
      } has abilities ${this.createPowerString(
        this.powers
      )}, and his ultimate is ${this.ulti}.`
    );
  }
}

export default Phoenix;
