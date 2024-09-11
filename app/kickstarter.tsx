import Image from "next/image";
import Cassettes from "../public/cassettes.png";
export default function Kickstarter() {
  return (
    <div className="grid lg:grid-cols-5 border-b-2 border-main">
      <div className="flex items-center justify-center w-full lg:col-span-3">
        <div className="p-8 lg:p-20 text-center">
          <h1 className="flex justify-center text-5xl pb-8">Kickstarter</h1>
          <p className="text-xl">
            we’re launching our kickstarter on November 7th 2024. sign up to
            stay informed on the launch.
          </p>
        </div>

      </div>
      <div className="flex flex-col items-center justify-center w-full lg:col-span-2">
        <input className="border-main border-2" placeholder="email"/>
        <button className="text-white bg-main px-8 py-2">Sign up for our launch</button>

      </div>
    </div>
  );
}
