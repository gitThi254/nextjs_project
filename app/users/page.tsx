import SelectRole from "@/components/form/SelectRole";
import UsersLayout from "@/components/layout/UsersLayout";
import Link from "next/link";
import React from "react";

const Users = ({ searchParams }: { searchParams: SearchQuery }) => {
  return (
    <div>
      <SelectRole />
      <div className='flex flex-col'>
        <h1>List User</h1>
        <Link href='/'>go to home</Link>
        <Link href='/users/create'>create user</Link>
      </div>
      <div>
        <UsersLayout searchParams={searchParams} />
      </div>
    </div>
  );
};

export default Users;
