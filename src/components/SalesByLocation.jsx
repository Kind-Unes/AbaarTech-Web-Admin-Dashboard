import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const salesByLocationRows = [
  {
    id: 1,
    country: "Saudi Arabia",
    sales: 99995,
    flag: "https://flagcdn.com/w40/sa.png",
  },
  {
    id: 2,
    country: "Algeria",
    sales: 99992,
    flag: "https://flagcdn.com/w40/dz.png",
  },
  {
    id: 3,
    country: "USA",
    sales: 45000,
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    id: 4,
    country: "China",
    sales: 85000,
    flag: "https://flagcdn.com/w40/cn.png",
  },
  {
    id: 5,
    country: "Brazil",
    sales: 60000,
    flag: "https://flagcdn.com/w40/br.png",
  },
];

const salesByLocationColumns = [
  {
    field: "flag",
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
  { field: "country", headerName: "Country", flex: 1 },
  { field: "sales", headerName: "Sales", width: 150 },
];

function SalesByLocation() {
  return (
    <div style={{ height: 400, width: "100%", backgroundColor: "white" }}>
      <DataGrid
        rows={salesByLocationRows}
        columns={salesByLocationColumns}
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
            backgroundColor: "rgba(100, 200, 243, 0.3)",
            fontWeight: "bold",
          },
        }}
      />
    </div>
  );
}

export default SalesByLocation;
