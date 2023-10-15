import React from "react";

const UserDetailsInfo = ({ user }: { user: User }) => {
  return (
    <div>
      <div>{user.id}</div>
      <div>{user.email}</div>
      <div>{user.name}</div>
      <div>{user.password}</div>
      <div>{user.role}</div>
      <div>{new Date(user.updateAt.toString()).toLocaleString()}</div>
      <div>{new Date(user.createdAt.toString()).toLocaleString()}</div>
    </div>
  );
};

export default UserDetailsInfo;
