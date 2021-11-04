class Player {
  username: string;
  killCount: number;
  radiant: boolean;

  constructor(name: string, kills: number, radiant: boolean) {
    this.username = name;
    this.killCount = kills;
    this.radiant = radiant;
  }

  getInfo(): void {
    console.log(
      `${this.username} has killed ${this.killCount} other players, and ${
        this.radiant ? "is" : "is not"
      } radiant.`
    );
  }

  addKill(): void {
    console.log("Boom Headshot!");
    this.killCount++;
  }
}

export default Player;
