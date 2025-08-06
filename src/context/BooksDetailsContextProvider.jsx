import { Children } from "react";
import { BooksDetailContext } from ".";
import { useState } from "react";

const BooksDetailsContextProvider = ({ children }) => {
  const [booksDetails, setBooksDetails] = useState({});
  return (
    <>
      <BooksDetailContext.Provider value={{ booksDetails, setBooksDetails }}>
        {children}
      </BooksDetailContext.Provider>
    </>
  );
};

export default BooksDetailsContextProvider;
