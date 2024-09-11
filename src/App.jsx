import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Data from "./data"; // Importing data from external file

const columns = [
  { field: "customer",
    headerName: "Customer",
    width: 200,
    renderCell: (params) => (
      <span>
        {params.value}
      </span>
    ),
  },
  { field: "lastSeen", headerName: "Last seen", width: 150 },
  { field: "orders", headerName: "Orders", width: 100, type: "number"},
  {
    field: "totalSpent",
    headerName: "Total spent",
    width: 150,
    renderCell: (params) => {
      const value = params.value.replace("$", "");
      const parsedValue = parseFloat(value);

      const style = parsedValue > 400
          ? { color: "black"}
          : { color: "red" };

      return <span style={style}>{params.value}</span>;
    },
  },
  { field: "latestPurchase", headerName: "Latest purchase", width: 200 },
  { field: "news", headerName: "News", width: 100, type: "boolean" },
  { field: "segments", headerName: "Segments", width: 150 },
];

const App = () => {
  
  return (
    <div
      style={{ height: "600px", width: "90%" }}
      className="flex justify-center mx-auto -mt-8"
    >
      <DataGrid
        rows={Data}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        sortingOrder={["asc", "desc"]}
        hideFooterPagination
      />
    </div>
  );
};

export default App;
