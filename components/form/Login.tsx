"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const form = useForm<UserLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;
  const onSubmit = async (data: UserLogin) => {
    const res = await signIn("credentials", { ...data, redirect: false });
    if (res?.error) {
      alert("dang nhap that bai");
      return null;
    }
    router.replace("/");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='email'
        {...register("email", {
          required: "required",
        })}
      />
      <input
        type='password'
        {...register("password", {
          required: "required",
        })}
      />

      <button>Login</button>
    </form>
  );
};

export default LoginForm;
