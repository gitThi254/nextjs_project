"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface SearchKeyWord {
  keyword: string;
}

const Search = () => {
  const router = useRouter();
  const form = useForm<SearchKeyWord>({
    defaultValues: {
      keyword: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = (data: SearchKeyWord) => {
    if (data.keyword) {
      router.push(`/users?keyword=${data.keyword}`);
    } else {
      router.push(`/users`);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='text' placeholder='search' {...register("keyword")} />
      <button>Search</button>
    </form>
  );
};

export default Search;
