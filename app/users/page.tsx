import React, { Suspense } from "react";
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
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable searchParams={sortOrder} />
      </Suspense>
    </>
  );
};

export default UsersPage;
