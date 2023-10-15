"use client";
import { getQueryParams } from "@/helpers/helpers";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
interface SelectRole {
  role: "ADMIN" | "USER" | "";
}
const SelectRole = () => {
  const router = useRouter();
  const form = useForm<SelectRole>({
    defaultValues: {
      role: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  let queryParams;

  const onSubmit = (data: SelectRole) => {
    if (typeof window !== "undefined") {
      queryParams = new URLSearchParams(window.location.search);
      queryParams = getQueryParams(queryParams, "select", data.role);
      const path = window.location.pathname + "?" + queryParams.toString();
      router.push(path);
    }
  };
  return (
    <form onClick={handleSubmit(onSubmit)}>
      <select {...register("role")}>
        <option value=''>All</option>
        <option value='USER'>User</option>
        <option value='ADMIN'>Admin</option>
      </select>
    </form>
  );
};

export default SelectRole;
