import CreateUserForm from "@/components/form/CreateUser";
import Link from "next/link";
import React from "react";

const CreateUser = () => {
  return (
    <div>
      <div>Create User</div>
      <Link href='/users'>go to users</Link>
      <CreateUserForm />
    </div>
  );
};

export default CreateUser;
