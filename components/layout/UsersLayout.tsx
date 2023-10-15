"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/libs/fetch/useFetch";
import User from "./User";
const UsersLayout = ({ searchParams }: { searchParams?: SearchQuery }) => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", searchParams],
    queryFn: () => getAllUsers(searchParams),
  });
  if (isLoading) return "loading...";
  return (
    <div>
      {users?.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersLayout;
