"use client";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/libs/fetch/useFetch";
const RemoveUserBtn = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const { mutateAsync: deleteUserMutaion } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.refetchQueries(["users"]);
    },
  });
  return <button onClick={() => deleteUserMutaion(id)}>delete</button>;
};

export default RemoveUserBtn;
