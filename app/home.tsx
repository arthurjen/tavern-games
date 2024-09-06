import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <Image src="/liars-dice.png" alt="splash image" width="715" height="731"/>
        {/*  */}
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="p-20">
          <h1 className="flex justify-center text-3xl py-8">Tavern Games</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
