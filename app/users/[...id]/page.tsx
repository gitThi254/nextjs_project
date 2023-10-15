import UserDetails from "@/components/layout/UserDetails";
import Link from "next/link";
import React from "react";

const Profile = ({ params: { id } }: Params) => {
  return (
    <div>
      <div>Profile User</div>
      <Link href='/users'>go to users</Link>
      <UserDetails id={id} />
    </div>
  );
};

export default Profile;
