import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, showSearch, setShowSearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
