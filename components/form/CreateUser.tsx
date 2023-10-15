"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "@/libs/fetch/useFetch";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { time } from "console";
const CreateUserForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: createUserMutation } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast("create user successfully", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: "success",
        theme: "light",
      });
      router.push("/users");
    },
  });
  const form = useForm<UserRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  const onSubmit = async (data: UserRegister) => {
    await createUserMutation(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        {...register("name", {
          required: "required",
        })}
      />
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
      <button>Register</button>
    </form>
  );
};

export default CreateUserForm;
