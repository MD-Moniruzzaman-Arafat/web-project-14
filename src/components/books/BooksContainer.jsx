import { useLoaderData } from "react-router-dom";
import BooksCard from "./BooksCard";

const BooksContainer = () => {
  const booksData = useLoaderData();
  console.log(booksData);
  return (
    <>
      <div className="container mx-auto my-20">
        <h1 className="font-bold text-3xl mb-10 text-center">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {booksData.map((data) => (
            <BooksCard key={data.bookId} data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BooksContainer;
