import Image, { StaticImageData } from "next/image";
import DiceKnight from "../public/dice-knight.png";
import DiceThief from "../public/dice-thief.png";
import DiceMage from "../public/dice-mage.png";
import DiceMan from "../public/dice-man.png";
import DiceKingdomBanner2 from "../public/dice-kingdom-2.png";

export default function JoinTheParty() {
  return (
    <div className="flex relative items-center justify-center w-full text-xl border-main border-b-2">
      <Character className="left-64" src={DiceMan} alt="Dice Man" />
      <Character className="left-36 bottom-24" src={DiceThief} alt="Dice Thief" />

      <div className="flex flex-col items-center justify-center w-full lg:col-span-3 p-8 lg:p-20">
        <Image
          src={DiceKingdomBanner2}
          alt="Dice Kingdom Logo"
          width="300"
          height="100"
        />
        <div className="flex items-center justify-center flex-col text-center w-72">
          <h1 className=" text-5xl mb-6">Join the party?</h1>
          <p className="text-xl">
            this is a collaborative project and the more the merrier. please hop
            in our discord and say hello!
          </p>
          <a
            href="https://discord.gg/kZSD5cnuKb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-center flex items-center justify-center bg-secondary w-80 h-10 mt-6 hover:bg-secondary-800"
          >
            Join Discord
          </a>
        </div>
      </div>
      <Character className="right-64" src={DiceMage} alt="Dice Mage" />
      <Character className="right-36 bottom-24" src={DiceKnight} alt="Dice Knight" />
    </div>
  );
}

function Character(props: {
  src: StaticImageData;
  alt: string;
  className: string;
}) {
  return (
    <Image
      className={`invisible lg:visible absolute -z-10 ${props.className}`}
      src={props.src}
      alt={props.alt}
      width="200"
      height="200"
    />
  );
}
