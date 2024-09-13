import Image from "next/image";
import Cassettes from "../public/cassettes.png";
export default function Home() {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="bg-main flex items-center justify-center h-full w-full lg:col-span-3">
        <Image
          src={Cassettes}
          alt="splash image"
          priority
          className="p-8 lg:p-24"
        />
      </div>
      <div className="flex items-center justify-center w-full border-main border-8 lg:col-span-2">
        <div className="p-8 lg:p-20 text-center">
          <h1 className="flex justify-center text-5xl pb-8">Tavern Games</h1>
          <p className="text-xl">
            We’re proud to present Dice Kingdom’s first product! Five simple D6
            dice games for gamers and non-gamers alike. Look for it at your
            local game store or pub 🍻
          </p>
        </div>
      </div>
    </div>
  );
}
