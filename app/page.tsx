import Home from "./home";
import Image from "next/image";
import DiceKingdomBanner from "../public/dice-kingdom.png";

export default function Page() {
  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      <Image
        src="/dice-kingdom.png"
        alt="splash image"
        width="3438"
        height="1186"
        priority
      />
      <Home />
    </main>
  );
}
