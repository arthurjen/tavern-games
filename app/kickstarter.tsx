import EmailForm from "./email-form";
export default function Kickstarter() {
  return (
    <div className="grid lg:grid-cols-5 border-b-2 border-main pb-10">
      <div className="flex items-center justify-center w-full lg:col-span-3">
        <div className="p-8 lg:p-20 text-center lg:text-left">
          <h1 className=" text-5xl pb-8">Kickstarter</h1>
          <p className="text-xl">
            we’re launching our kickstarter on November 7th 2024. sign up to
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