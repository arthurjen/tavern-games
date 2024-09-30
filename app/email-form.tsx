"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("xzzpqdzq");
  if (state.succeeded) {
    return <p>Thank you!</p>;
  }
  return (
    <form
      className="flex flex-col items-center justify-center w-full text-xl"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full h-12 px-3 mb-5 border-2 border-secondary lg:w-80 bg-beige placeholder:text-secondary placeholder:text-opacity-50 placeholder:font-rubrik-bold"
        id="email"
        type="email"
        name="email"
        placeholder="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        className="w-full h-12 text-white font-rubrik-bold bg-secondary hover:bg-secondary-800 lg:w-80"
        type="submit"
        disabled={state.submitting}
      >
        Sign up for the launch!
      </button>
    </form>
  );
}
