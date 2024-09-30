import Image from "next/image";
import Cassettes from "../public/cassettes.png";
import Paper from "../public/paper.png";
export default function Home() {
  return (
    <div className="grid lg:grid-cols-5 bg-main">
      <div className="flex items-center justify-center w-full h-full lg:col-span-3">
        <Image
          src={Cassettes}
          alt="splash image"
          priority
          className="p-8 lg:p-0"
          height="200"
        />
      </div>
      <div className="relative flex items-center justify-center w-full lg:h-full lg:col-span-2 lg:py-8 mb-14">
        <Image
          src={Paper}
          alt="background paper image"
          priority
          className="absolute top-0 p-3 lg:h-full"
        />
        <div className="z-10 mt-8 lg:mt-0 px-9 py-9">
          <h1 className="flex pb-4 text-4xl font-rubrik-bold">Tavern Games</h1>
          <p className="text-xl leading-5">
            We’re proud to present Dice Kingdom’s first product! Five simple
            dice games for gamers and non-gamers alike. Look for it at your
            local game store or pub 🍻
          </p>
        </div>
      </div>
    </div>
  );
}
