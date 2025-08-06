import { IoIosArrowDown } from "react-icons/io";
import BooksListCard from "../components/booksListCard/BooksListCard";

const ListedBooks = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <h1 className="text-center font-extrabold text-4xl bg-base-300 rounded-2xl p-5">
          Books
        </h1>

        <div className="text-center mt-10">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn px-10 m-1 bg-[#23BE0A] text-white"
            >
              Sort By <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu items-center bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm"
            >
              <li>
                <a>Rating</a>
              </li>
              <li>
                <a>Number of pages</a>
              </li>
              <li>
                <a>Publisher year</a>
              </li>
            </ul>
          </div>
        </div>

        {/* name of each tab group should be unique */}
        <div className="tabs tabs-lift mt-20">
          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Read Books"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <BooksListCard />
          </div>

          <input
            type="radio"
            name="my_tabs_3"
            className="tab"
            aria-label="Wishlist Books"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6">
            Wishlist Books
          </div>
        </div>
      </div>
    </>
  );
};

export default ListedBooks;
