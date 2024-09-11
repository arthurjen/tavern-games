"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function EmailForm() {
  const [state, handleSubmit] = useForm("xzzpqdzq");
  if (state.succeeded) {
    return <p>Thank you!</p>;
  }
  return (
    <form className="flex flex-col items-center justify-center w-full text-xl" onSubmit={handleSubmit}>
      <input
        className="border-main border-2 w-80 h-10 mb-3 px-3 placeholder:text-main placeholder:text-opacity-50"
        id="email"
        type="email"
        name="email"
        placeholder="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <button
        className="text-white bg-main w-80 h-10"
        type="submit"
        disabled={state.submitting}
      >
        Sign up for our launch
      </button>
    </form>
  );
}
