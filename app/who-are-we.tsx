export default function WhoAreWe() {
  return (
    <div className="grid lg:grid-cols-5 border-b-2 border-main pb-10">
      <div className="flex items-center justify-center w-full lg:col-span-3">
        <h1 className="bg-main text-white w-96 h-56 p-4 mt-8">video placeholder</h1>
      </div>
      <div className="flex flex-col items-center justify-center lg:col-span-2">
        <div className="p-8 lg:p-20 text-center lg:text-left">
          <h1 className=" text-5xl pb-8">who are we?</h1>
          <p className="text-xl">
            we’re shepherding dice kingdom into reality. check this quick video
            to meet the team and learn about our dice dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
