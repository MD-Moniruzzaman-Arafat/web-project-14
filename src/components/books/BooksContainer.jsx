import BooksCard from "./BooksCard";

const BooksContainer = () => {
  return (
    <>
      <div className="container mx-auto my-20">
        <h1 className="font-bold text-3xl mb-10 text-center">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <BooksCard />
          <BooksCard />
          <BooksCard />
          <BooksCard />
          <BooksCard />
          <BooksCard />
        </div>
      </div>
    </>
  );
};

export default BooksContainer;
