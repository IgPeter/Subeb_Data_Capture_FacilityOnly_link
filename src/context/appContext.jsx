import { createContext, useContext, useState } from "react";

//created context
const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [school, setSchool] = useState("");

  return (
    <DataContext.Provider value={{ data, school, setData, setSchool }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
