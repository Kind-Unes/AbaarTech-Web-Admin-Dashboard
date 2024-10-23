import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const topSellingRows = [
  {
    id: 1,
    project: "Artesian well - Pakistan",
    sales: 401,
    price: "$99995",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 2,
    project: "Artesian well - Pakistan",
    sales: 301,
    price: "$99995",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 3,
    project: "Artesian well - Pakistan",
    sales: 300,
    price: "$99995",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 4,
    project: "Artesian well - Pakistan",
    sales: 298,
    price: "$99995",
    image: "https://via.placeholder.com/40",
  },
  {
    id: 5,
    project: "Artesian well - Pakistan",
    sales: 256,
    price: "$99995",
    image: "https://via.placeholder.com/40",
  },
];

const topSellingColumns = [
  {
    field: "image",
    headerName: "",
    width: 70,
    renderCell: (params) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={params.value}
          alt="flag"
          style={{ width: 30, height: 20, borderRadius: "5px" }}
        />
      </div>
    ),
  },
  { field: "project", headerName: "Project", flex: 1 },
  { field: "sales", headerName: "Sales", width: 150 },
  { field: "price", headerName: "Price", width: 150 },
];

function TopSellingProjects() {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={topSellingRows}
        columns={topSellingColumns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          "& .MuiDataGrid-root": {
            backgroundColor: "#E3F2FD",
          },
          "& .MuiDataGrid-row": {
            backgroundColor: "rgba(33, 150, 243, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(33, 150, 243, 0.2)",
            },
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "rgba(33, 150, 243, 0.3)",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
}

export default TopSellingProjects;
