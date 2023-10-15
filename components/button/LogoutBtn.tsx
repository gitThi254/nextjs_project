"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
const LogoutBtn = () => {
  const { data: session, status } = useSession();
  if (status === "loading") return "loading...";
  return (
    <>
      <div>{session?.user?.name}</div>
      <div>{session?.user?.email}</div>
      <div>{session?.user?.role}</div>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
};

export default LogoutBtn;
