import React from "react";
import UserTable from "./UserTable";
import { sort } from "fast-sort";

interface Props{
  searchParams:{sortOrder:string}
}

const UsersPage = ({searchParams:sortOrder}:Props) => {
  return (
    <>
      <h1>Users</h1>
      <UserTable searchParams={sortOrder} />
      
    </>
  );
};

export default UsersPage;
