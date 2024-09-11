import Home from "./home";
import Image from "next/image";
import DiceKingdomBanner from "../public/dice-kingdom.png";
import Kickstarter from "./kickstarter";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-screen">
      <Image className="p-8" src={DiceKingdomBanner} alt="Dice Kingdom Banner" priority width="900" height="300"/>
      <Home />
      <Kickstarter />
    </main>
  );
}
