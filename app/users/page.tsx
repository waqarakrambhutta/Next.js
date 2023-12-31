import React from "react";
import UserTable from "./UserTable";
import { sort } from "fast-sort";
import Link from "next/link";

interface Props{
  searchParams:{sortOrder:string}
}

const UsersPage = ({searchParams:sortOrder}:Props) => {
  return (
    <>
      <h1>Users</h1>
      <Link href={'/users/new'} className="btn">New User</Link>
      <UserTable searchParams={sortOrder} />
      
    </>
  );
};

export default UsersPage;
