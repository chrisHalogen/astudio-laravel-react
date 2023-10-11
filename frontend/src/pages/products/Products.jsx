import React from "react";
import "./products.scss";
import { Breadcrumb, Spacer, Table } from "../../components";

const Products = () => {
  const gridColumns = [
    {
      field: "title",
      type: "string",
      headerName: "Title",
      width: 200,
    },
    // {
    //   field: "thumbnail",
    //   type: "string",
    //   headerName: "Image",
    //   width: 300,
    //   renderCell: (params) => {
    //     return (
    //       <img
    //         className="product-image"
    //         src={params.row.thumbnail || "/no-image.png"}
    //         alt="Product Image"
    //       />
    //     );
    //   },
    // },
    {
      field: "description",
      type: "string",
      headerName: "Description",
      width: 300,
    },
    {
      field: "price",
      type: "number",
      headerName: "Price",
      width: 150,
    },
    {
      field: "discountPercentage",
      type: "number",
      headerName: "Discount",
      width: 150,
    },
    {
      field: "stock",
      type: "number",
      headerName: "Stock",
      width: 150,
    },
  ];

  const dataFields = [
    "id",
    "title",
    // "thumbnail",
    "description",
    "price",
    "discountPercentage",
    "stock",
  ];

  return (
    <div className="page">
      <Breadcrumb name="Products" url="products" />
      <Spacer height="2rem" />
      <Table
        context="products"
        gridColumns={gridColumns}
        dataFields={dataFields}
      />
    </div>
  );
};

export default Products;
