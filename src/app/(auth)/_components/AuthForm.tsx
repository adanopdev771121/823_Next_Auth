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
    <form onSubmit={onSubmit} className="mt-14 h-[380px] relative">
      <label className="font-bold text-xl">Email</label>
      <input
        {...register("email", {
          required: { value: true, message: "Email field is required" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid Email",
          },
        })}
        className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl px-5"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <div className="absolute top-[60px] right-5">
        <IconMail />
      </div>
      <p className="font-bold text-xl mt-6">Password</p>
      <input
        {...register("password", {
          required: { value: true, message: "Password field is required" },
          minLength: {
            value: 6,
            message: "Password must be more than 6 characters",
          },
        })}
        type={isPasswordShown ? "text" : "password"}
        placeholder="Enter Password"
        className="w-full h-20 rounded-xl border border-solid border-gray-300 text-xl px-5"
      />
      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}
      <div
        className="absolute top-[190px] right-5"
        onClick={() => setIsPasswordShown(!isPasswordShown)}
      >
        {isPasswordShown ? <IconEyeOpen /> : <IconEyeClose />}
      </div>
      <input
        type="submit"
        value={title}
        className="w-full h-20 bg-green-500 font-bold text-white rounded-xl text-xl text-center absolute bottom-1 left-0"
      />
    </form>
  );
}
