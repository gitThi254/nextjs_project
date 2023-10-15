"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/libs/fetch/useFetch";
import UserDetailsInfo from "./UserDetailsInfo";
const UserDetails = ({ id }: { id: string }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
  });
  if (isLoading) return <div>loading...</div>;
  if (error) return "error";
  return <>{user && <UserDetailsInfo user={user} />}</>;
};

export default UserDetails;
