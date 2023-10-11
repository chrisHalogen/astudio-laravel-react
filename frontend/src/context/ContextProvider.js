import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [tableData, setTableData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageSize, setPageSize] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <StateContext.Provider
      value={{
        tableData,
        setTableData,
        isLoading,
        setIsLoading,
        pageSize,
        setPageSize,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
