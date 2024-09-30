import EmailForm from "./email-form";
export default function Kickstarter() {
  return (
    <div className="grid p-10 pb-14 lg:grid-cols-5 bg-beige">
      <div className="flex items-center w-full pb-8 lg:col-span-3">
        <div className="">
          <h1 className="pb-4 text-4xl font-rubrik-bold">Kickstarter</h1>
          <p className="text-xl leading-5">
            We’re launching our kickstarter on November 7th 2024. Sign up to
            stay informed on the launch.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:col-span-2">
        <EmailForm />
      </div>
    </div>
  );
}
