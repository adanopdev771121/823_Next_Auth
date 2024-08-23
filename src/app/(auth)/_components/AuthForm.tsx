import { useState } from "react";
import { useForm } from "react-hook-form";

import { postFormData } from "@/utils/helpers";
import IconMail from "./IconMail";
import IconEyeOpen from "./IconEyeOpen";
import IconEyeClose from "./IconEyeClose";

type FormData = {
  email: string;
  password: string;
};

export default function AuthForm({ title }: { title: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => postFormData(data));

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  return (
    <form onSubmit={onSubmit} className="mt-14 relative">
      <label className="font-bold text-xl">Email</label>
      <input
        {...register("email")}
        className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl px-5 mb-6"
      />
      <div className="absolute top-[60px] right-5">
        <IconMail />
      </div>
      <label className="font-bold text-xl">Password</label>
      <input
        {...register("password")}
        type={isPasswordShown ? "text" : "password"}
        placeholder="Enter Password"
        className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl px-5"
      />
      <div
        className="absolute top-[190px] right-5"
        onClick={() => setIsPasswordShown(!isPasswordShown)}
      >
        {isPasswordShown ? <IconEyeOpen /> : <IconEyeClose />}
      </div>
      <input
        type="submit"
        value={title}
        className="w-full h-20 bg-green-500 font-bold text-white rounded-xl text-xl text-center mt-12"
      />
    </form>
  );
}
