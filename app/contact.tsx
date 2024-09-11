import Image from "next/image";
import DiceKingdomBanner from '../public/dice-kingdom.png'
export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-main text-xl p-8">
      <Image
        className="p-8"
        src={DiceKingdomBanner}
        alt="Dice Kingdom Banner"
        priority
        width="300"
        height="100"
      />
      <div className="">Dice Kingdom LLC</div>
      <div className="text-secondary">Privacy Policy</div>
      <div className="text-secondary">CCG Store</div>
      <div className="text-secondary">Contact Us</div>
    </div>
  );
}
