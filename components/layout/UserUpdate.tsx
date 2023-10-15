"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/libs/fetch/useFetch";
import UpdateUser from "../form/UpdateUser";
const UserUpdate = ({ id }: { id: string }) => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", id],
    queryFn: () => getUser(id),
  });
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return <UpdateUser data={user} id={id} />;
};

export default UserUpdate;
