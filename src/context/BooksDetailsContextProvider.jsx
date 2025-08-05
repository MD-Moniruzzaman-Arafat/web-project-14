import { useState } from "react";
import { BooksDetailContext } from ".";

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
