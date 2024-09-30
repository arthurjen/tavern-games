import Image from "next/image";
import JoinThePartyImage from "../public/join-the-party.png";

export default function JoinTheParty() {
  return (
    <div className="relative flex items-center justify-center w-full text-xl border-b-2 border-main">
      <div className="flex flex-col items-center justify-center w-full p-8 lg:col-span-3 lg:p-20">
        <Image
          src={JoinThePartyImage}
          alt="Dice Kingdom Logo"
          width="300"
          height="100"
        />
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-rubrik-bold">Join the party!</h1>
          <p className="mb-8 text-xl leading-5">
            This is a collaborative project and the more the merrier. Please hop
            in our Discord and say hello!
          </p>
          <a
            href="https://discord.gg/kZSD5cnuKb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-16 text-2xl text-white font-rubrik-bold h0 ptext-center bg-secondary w-80 hover:bg-secondary-800"
          >
            Join the Discord
          </a>
        </div>
      </div>
    </div>
  );
}
