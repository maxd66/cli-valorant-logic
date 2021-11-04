import Player from "../Player/Player";

class Enemy {
  private name: string;
  protected ssn: number;

  constructor(name: string, ssn: number) {
    this.name = name;
    this.ssn = ssn;
  }

  private printSsn() {
    console.log(this.ssn);
  }

  printName() {
    console.log(this.name);
    this.printSsn();
  }

  private changeSsn(number: number) {
    this.ssn = number;
  }

  changeNameAndSsn(name: string, number: number) {
    this.name = name;
    this.changeSsn(number);
  }
}

export default Enemy;
