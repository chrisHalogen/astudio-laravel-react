import React from "react";
import "./users.scss";
import { Breadcrumb, Spacer, Table } from "../../components";

const Users = () => {
  const gridColumns = [
    {
      field: "firstName",
      type: "string",
      headerName: "First name",
      width: 150,
    },
    {
      field: "lastName",
      type: "string",
      headerName: "Last name",
      width: 150,
    },
    {
      field: "maidenName",
      type: "string",
      headerName: "Maiden name",
      width: 150,
    },
    {
      field: "age",
      type: "number",
      headerName: "age",
      width: 50,
    },
    {
      field: "gender",
      type: "string",
      headerName: "Gender",
      width: 100,
    },
    {
      field: "email",
      type: "string",
      headerName: "Email",
      width: 200,
    },
    {
      field: "username",
      type: "string",
      headerName: "Username",
      width: 100,
    },
    {
      field: "bloodGroup",
      type: "string",
      headerName: "Blood Group",
      width: 100,
    },
    {
      field: "eyeColor",
      type: "string",
      headerName: "Eye Color",
      width: 100,
    },
  ];

  const dataFields = [
    "id",
    "firstName",
    "lastName",
    "maidenName",
    "age",
    "gender",
    "email",
    "username",
    "bloodGroup",
    "eyeColor",
  ];

  return (
    <div className="page">
      <Breadcrumb name="Users" url="users" />
      <Spacer height="2rem" />
      <Table
        context="users"
        gridColumns={gridColumns}
        dataFields={dataFields}
      />
    </div>
  );
};

export default Users;
