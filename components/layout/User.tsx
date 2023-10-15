import Link from "next/link";
import React from "react";
import RemoveUserBtn from "../button/RemoveUserBtn";

const User = ({ user }: { user: User }) => {
  return (
    <div className='grid grid-cols-2 w-[800px]'>
      <Link href={`/users/${user.id}`} className='grid grid-cols-2 w-[400px]'>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </Link>
      <div className='flex justify-around'>
        <Link href={`/users/update/${user.id}`}>update</Link>
        <RemoveUserBtn id={user.id} />
      </div>
    </div>
  );
};

export default User;
