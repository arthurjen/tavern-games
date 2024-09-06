import Home from "./home";
import Image from "next/image";
import DiceKingdomBanner from "../public/dice-kingdom.png";

export default function Page() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Image src={DiceKingdomBanner} alt="splash image" priority />
      <Home />
    </main>
  );
}
