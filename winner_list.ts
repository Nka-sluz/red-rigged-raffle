import { Prize } from "./prize.ts";

export class WinnerList {
  constructor(
    private contestants: Set<string>,
    private prizes: Prize[],
  ) {}
  public generateList(): Map<string, string> {
    const winnerList = new Map<string, string>();
    const winningContestants = new Array<string>();
    while (this.contestants.size > 0) {
      const randomN = Math.random();
      const chosenContestantN = Math.floor(randomN * this.contestants.size);
      const chosenContestant = Array.from(this.contestants)[chosenContestantN];
      winningContestants.push(chosenContestant);
      this.contestants.delete(chosenContestant);
    }
    while (this.prizes.length > 0 && winningContestants.length > 0) {
      const prize = this.prizes[0];
      const prizeWinners = winningContestants.shift() || "";
      if (winnerList.has(prizeWinners)) {
        const prizeList = winnerList.get(prizeWinners) + `, ${prize.name}`;
        winnerList.set(prizeWinners, prizeList);
      } else winnerList.set(prizeWinners, prize.name);
      if (prize.quantity > 1) {
        this.prizes[0].quantity--;
      } else {
        this.prizes.shift();
      }
    }
    return winnerList;
  }
}
