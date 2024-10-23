import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

const recentOrdersRows = [
  { id: "#301643", product: "Artesian well - Pakistan", productImg: "https://via.placeholder.com/40", date: "2 Oct 2024", customerName: "Younes", customerEmail: "abar@mail.com", total: "$99995", status: "Under preparation" },
  { id: "#301600", product: "Artesian well - Pakistan", productImg: "https://via.placeholder.com/40", date: "3 Oct 2024", customerName: "Ali", customerEmail: "abar@mail.com", total: "$99995", status: "Under preparation" },
  { id: "#301555", product: "Artesian well - Pakistan", productImg: "https://via.placeholder.com/40", date: "4 Oct 2024", customerName: "Anes", customerEmail: "abar@mail.com", total: "$99995", status: "Under preparation" },
];

const recentOrdersColumns = [
  { field: "id", headerName: "Order ID", flex: 1 },
  {
    field: "product",
    headerName: "Product",
    flex: 2,
    renderCell: (params) => (
      <div className="flex items-center space-x-2">
        <img src={params.row.productImg} alt={params.value} className="w-10 h-10 rounded-md" style={{ display: "block" }} />
        <span>{params.value}</span>
      </div>
    ),
  },
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "customerName",
    headerName: "Customer",
    flex: 2,
    renderCell: (params) => (
      <div>
        <div>{params.value}</div>
        <div className="text-gray-500">{params.row.customerEmail}</div>
      </div>
    ),
  },
  { field: "total", headerName: "Total", flex: 1 },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => (
      <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full">
        {params.value}
      </span>
    ),
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: () => (
      <>
        <IconButton>
          <VisibilityIcon fontSize="small" />
        </IconButton>
        <IconButton>
          <EditIcon fontSize="small" />
        </IconButton>
      </>
    ),
  },
];

function RecentOrders() {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold">Recent Orders</h2>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={recentOrdersRows}
          columns={recentOrdersColumns}
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
    </div>
  );
}

export default RecentOrders;
