export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-12 text-l bg-main font-rubrik-semibold">
      <div className="pb-2">Dice Kingdom LLC.</div>
      <div className="pb-6">Oregon, USA</div>
      <Links href="/" text="Privacy Policy" />
      <Links href="https://cherrycitygaming.com/" text="CCG Store" />
      <Links href="/" text="Contact Us" />
    </div>
  );
}

function Links(props: { href: string; text: string }) {
  return (
    <a className="pb-2 hover:text-secondary-800" href={props.href}>
      {props.text}
    </a>
  );
}
