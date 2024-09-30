"use client";
import Image from "next/image";
import Hamburger from "../public/hamburger.png";

export default function HamburgerButton(props: { className: string }) {
  return (
    <button
      className={props.className}
      onClick={() => console.log("hamburger menu click")}
    >
      <Image
        src={Hamburger}
        alt="Hamburger Menu"
        priority
        width="50"
        height="50"
      />
    </button>
  );
}
