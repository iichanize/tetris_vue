export default class Score {
  public name = "";
  public score = 0;
  constructor(public readonly userName: string, public readonly value: number) {
    this.name = userName;
    this.score = value;
  }

  public getName() {
    return this.name;
  }

  public getScore() {
    return this.score;
  }
}
