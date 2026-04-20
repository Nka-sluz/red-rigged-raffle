import { WinnerList } from "./winner_list.ts";
import { Prize } from "./prize.ts";

export class Raffle {
  public main() {
    const contestants = [
      "@Gangsta2007",
      "@LockeDerBoss",
      "@MiiMiiSeinBruder",
      "@AlphaKevin",
      "@RedSoldier499",
      "@Louisa12",
      "@Drachenlord",
      "@Tanzverbot",
      "@tiger10ab",
      "@kaesekrokette99",
      "@fortnite4ever",
      "@ColdplayFan",
      "@Sören2013",
      "@MichiJackson",
      "@WBSLegal",
      "@Ronaldo7",
      "@Timmmäääh",
      "@SonGoku2011",
      "@NarutoBoy2000",
      "@Diggah69",
      "@roflomat",
      "@waifu_weeb",
      "@derp",
      "@MaxPower9000",
      "@MikrowellenPizza2006",
      "@MeddlFan",
      "@SpecialNeedChild37",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@LeonMachere",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@SimonDesue",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
      "@PrinzPuma",
    ];
    const prizes = [
      new Prize("iPhone 17 Pro", 1),
      new Prize("Trip nach Dubi", 1),
      new Prize("Stepper nach Isti", 1),
      new Prize("Flug nach Zypi", 1),
      new Prize("10 kg Haribo", 2),
      new Prize("PlayStation 5 Slim", 3),
      new Prize("gebrauchte Sneaker", 5),
    ];
    const winners = new WinnerList(
      contestants,
      prizes,
    ).generateList();
    for (const [contestant, prize] of winners.entries()) {
      console.log(`${contestant} gewinnt ${prize}`);
    }
  }
}

new Raffle().main();
