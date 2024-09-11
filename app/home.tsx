import Image from "next/image";
import Cassettes from "../public/cassettes.png";
export default function Home() {
  return (
    <div className="grid lg:grid-cols-5">
      <div className="bg-main flex items-center justify-center h-full w-full lg:col-span-3">
        <Image src={Cassettes} alt="splash image" className="p-8 lg:p-24" />
      </div>
      <div className="flex items-center justify-center w-full border-main border-8 lg:col-span-2">
        <div className="p-8 lg:p-20 text-center">
          <h1 className="flex justify-center text-5xl pb-8">Tavern Games</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </div>
      </div>
    </div>
  );
}
