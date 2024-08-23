"use client";

import Link from "next/link";
import { useState } from "react";

import IconEyeOpen from "../_components/IconEyeOpen";
import IconEyeClose from "../_components/IconEyeClose";
import IconGoogle from "../_components/IconGoogle";
import IconMail from "../_components/IconMail";

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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

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
        <div>
          <hr />
        </div>
        <p className="absolute top-[412px] left-[50%] w-10 bg-white text-center">
          OR
        </p>
        <div className="mt-14 relative">
          <p className="font-bold text-xl">Email Address</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl"
          />
          <div
            className="absolute right-5"
            style={{
              top: "calc(50% + 4px)",
            }}
          >
            <IconMail />
          </div>
        </div>
        <div className="my-6 relative">
          <p className="font-bold text-xl">PASSWORD</p>
          <input
            type={isPasswordShown ? "text" : "password"}
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl px-5"
          />
          <button
            className="absolute right-5"
            style={{
              top: "calc(50% + 4px)",
            }}
            onClick={() => setIsPasswordShown(!isPasswordShown)}
          >
            {isPasswordShown ? <IconEyeOpen /> : <IconEyeClose />}
          </button>
        </div>
        <button className="w-full h-20 bg-green-500 font-bold text-white rounded-xl text-xl text-center mt-6">
          {title}
        </button>
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
