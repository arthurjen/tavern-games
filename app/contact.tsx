import Image from "next/image";
import DiceKingdomBanner from "../public/dice-kingdom.png";
export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Image
        className="pt-8"
        src={DiceKingdomBanner}
        alt="Dice Kingdom Banner"
        width="250"
        height="100"
      />
      <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-main-100 text-xl pb-16">
        <div className="">Dice Kingdom LLC</div>
        <div className="pb-4">Oregon, USA</div>
        <Links href="/" text="Privacy Policy" />
        <Links href="https://cherrycitygaming.com/" text="CCG Store" />
        <Links href="/" text="Contact Us" />
      </div>
    </div>
  );
}

function Links(props: { href: string; text: string }) {
  return (
    <a
      className="text-secondary hover:text-secondary-800 pb-4"
      href={props.href}
    >
      {props.text}
    </a>
  );
}
