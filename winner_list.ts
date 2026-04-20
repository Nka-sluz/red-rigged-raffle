import { Prize } from "./prize.ts";

export class WinnerList {
  constructor(
    private contestants: string[],
    private prizes: Prize[],
  ) {}
  public generateList(): Map<string, string> {
    const winnerList = new Map<string, string>();
    const winningContestants = new Array<string>();
    while (this.contestants.length > 0) {
      const randomN = Math.random();
      const chosenContestantN = Math.floor(
        randomN * this.contestants.length,
      );
      const chosenContestant = this.contestants[chosenContestantN];
      winningContestants.push(chosenContestant);
      this.contestants.pop();
    }
    while (this.prizes.length > 0 && winningContestants.length > 0) {
      const prize = this.prizes[0];
      const prizeWinners = winningContestants.shift() || "";
      winnerList.set(prizeWinners, prize.name);
      if (prize.quantity > 0) {
        this.prizes.shift();
      } else {
        this.prizes[0].quantity--;
      }
    }
    return winnerList;
  }
}
