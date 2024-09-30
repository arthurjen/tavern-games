import Home from "./home";
import Image from "next/image";
import DiceKingdomBanner from "../public/dice-kingdom-2.png";
import Kickstarter from "./kickstarter";
import WhoAreWe from "./who-are-we";
import JoinTheParty from "./join-the-party";
import Contact from "./contact";
import HamburgerButton from "./hamburger-button";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-screen">
      <HamburgerButton className="absolute cursor-pointer right-8 top-20" />
      <div className="relative w-44">
        <Image
          className="pt-8 pb-4"
          src={DiceKingdomBanner}
          alt="Dice Kingdom Banner"
          priority
        />
      </div>
      <Home />
      <Kickstarter />
      <WhoAreWe />
      <JoinTheParty />
      <Contact />
    </main>
  );
}
