import Image from "next/image";
import DiceKingdomBanner2 from "../public/dice-kingdom-2.png";
export default function JoinTheParty() {
  return (
    <div className="flex items-center justify-center w-full text-xl border-main border-b-2">
      <div className="flex flex-col items-center justify-center w-full lg:col-span-3 p-8 lg:p-20">
        <Image
          src={DiceKingdomBanner2}
          alt="Dice Kingdom Banner"
          priority
          width="300"
          height="100"
        />
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className=" text-5xl mb-6">Join the party?</h1>
          <p className="text-xl">
            this is a collaborative project and the more the merrier. please hop
            in our discord and say hello!
          </p>
          <a
            href="https://discord.gg/kZSD5cnuKb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-center flex items-center justify-center bg-main w-80 h-10 mt-6 hover:bg-main-800"
          >
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
}
