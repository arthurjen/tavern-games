import Video from "./video";
export default function WhoAreWe() {
  return (
    <div className="grid p-10 pb-14 lg:grid-cols-5 bg-main">
      <div className="flex items-center justify-center w-full lg:col-span-3">
        <Video />
      </div>
      <div className="flex flex-col items-center justify-center lg:col-span-2">
        <div className="pt-8">
          <h1 className="pb-4 text-4xl font-rubrik-bold">who are we?</h1>
          <p className="text-xl leading-5">
            We’re friends shepherding Dice Kingdom into reality. Check this
            quick video to meet the team and learn about our dice dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
