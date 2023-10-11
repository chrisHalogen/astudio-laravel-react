import React, { useEffect } from "react";
import "./table.scss";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useStateContext } from "../../context/ContextProvider";

const Table = ({ gridColumns, context, dataFields }) => {
  const {
    tableData,
    setTableData,
    isLoading,
    setIsLoading,
    pageSize,
    setPageSize,
    searchTerm,
    setSearchTerm,
  } = useStateContext();

  const fetchData = async (query = {}, path = "") => {
    if (!path) {
      path = `https://dummyjson.com/${context}/?limit=100`;
    }

    await axios({
      url: path,

      params: query,
    })
      .then((res) => {
        let resources = [];

        res["data"][context].forEach((element) => {
          let temp = {};

          dataFields.forEach((field) => {
            temp[field] = element[field];
          });

          resources.push(temp);
        });
        setTableData(resources);
        setIsLoading(false);
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);

    let query = {
      q: searchTerm,
    };

    let url = `https://dummyjson.com/${context}/search`;

    fetchData(query, url);
  };

  if (isLoading) {
    return (
      <div className="dataTable">
        <span>Loading Data</span>
      </div>
    );
  }

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={tableData}
        columns={gridColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
            printOptions: { disableToolbarButton: true },
            csvOptions: { disableToolbarButton: true },
            onChange: handleSearch,
          },
        }}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize);
        }}
        pageSizeOptions={[5, 10, 20, 50]}
        disableRowSelectionOnClick
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default Table;
