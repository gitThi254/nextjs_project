import UserUpdate from "@/components/layout/UserUpdate";
import Link from "next/link";
import React from "react";

const Update = ({ params: { id } }: Params) => {
  return (
    <div>
      <div>update user</div>
      <Link href='/users'>go to users</Link>
      <UserUpdate id={id} />
    </div>
  );
};

export default Update;
