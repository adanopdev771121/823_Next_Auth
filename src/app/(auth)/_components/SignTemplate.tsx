"use client";

import Link from "next/link";

import AuthForm from "./AuthForm";
import IconGoogle from "../_components/IconGoogle";

interface SignTemplateProps {
  title: string;
  question: string;
  switchPage: string;
}

export default function SignTemplate({
  title,
  question,
  switchPage,
}: SignTemplateProps) {
  return (
    <div className="w-full h-full bg-green-100 pt-14">
      <div className="bg-white w-[600px] h-[750px] rounded-2xl mx-auto p-10 ">
        <h3 className="text-3xl font-bold text-center my-2">
          {title} with your email
        </h3>
        <p className="text-center">
          Use your email to sign in to your workspace
        </p>
        <button className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl flex justify-center items-center gap-5 my-10">
          <IconGoogle />
          Continue with Google
        </button>
        <hr />
        <p className="absolute top-[412px] left-[50%] w-10 bg-white text-center">
          OR
        </p>
        <AuthForm title={title} />
      </div>
      <div className="w-[400px] h-20 bg-white rounded-[40px] my-12 text-xl text-center content-center mx-auto">
        {question}
        <Link
          href={title === "Sign in" ? "/signup" : "/signin"}
          className="text-green-500"
        >
          {switchPage}
        </Link>
      </div>
    </div>
  );
}
