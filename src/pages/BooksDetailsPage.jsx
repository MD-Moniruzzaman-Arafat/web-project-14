import { useContext, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { BooksDetailContext } from "../context";

const BooksDetailsPage = () => {
  const { booksDetails, setBooksDetails } = useContext(BooksDetailContext);
  useEffect(() => {
    const booksDetailsData = JSON.parse(localStorage.getItem("bookDetails"));
    setBooksDetails(booksDetailsData);
  }, [setBooksDetails]);

  const handleAddToRead = (item) => {
    // Step 1: Get existing cart or start with empty array
    const existingRead = JSON.parse(localStorage.getItem("read")) || [];
    const existingWish = JSON.parse(localStorage.getItem("wish")) || [];

    // Optional: Check if item already exists by ID
    const isExistsRead = existingRead.some((i) => i.bookId === item.bookId);
    if (isExistsRead) {
      toast.warn(
        `Tit's already been added
read list and this Book will not be added to the read list.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }
    const isExistsWish = existingWish.some((i) => i.bookId === item.bookId);
    if (isExistsWish) {
      toast.warn(
        `Tit's already been added
wish list and this Book will not be added to the read list.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    } else {
      // Step 2: Add new item to the array
      const updatedRead = [...existingRead, item];

      // Step 3: Save back to localStorage
      localStorage.setItem("read", JSON.stringify(updatedRead));
      toast.success(
        `The clicked item will be added to the local
storage.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  const handleAddToWish = (item) => {
    // Step 1: Get existing cart or start with empty array
    const existingRead = JSON.parse(localStorage.getItem("read")) || [];
    const existingWish = JSON.parse(localStorage.getItem("wish")) || [];

    // Optional: Check if item already exists by ID
    const isExistsWish = existingWish.some((i) => i.bookId === item.bookId);
    if (isExistsWish) {
      toast.warn(
        `Tit's already been added
wish list and this Book will not be added to the wish list.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }
    const isExistsRead = existingRead.some((i) => i.bookId === item.bookId);
    if (isExistsRead) {
      toast.warn(
        `Tit's already been added
read list and this Book will not be added to the wish list.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    } else {
      // Step 2: Add new item to the array
      const updatedWish = [...existingWish, item];

      // Step 3: Save back to localStorage
      localStorage.setItem("wish", JSON.stringify(updatedWish));

      toast.success(
        `The clicked item will be added to the local
storage.`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container mx-auto my-10 flex justify-center gap-10 flex-col md:flex-row">
        <img
          src={booksDetails?.image}
          alt=""
          className="bg-base-300 p-20 max-w-[425px]"
        />
        <div>
          <div className="border-b-1 border-b-gray-300 pb-5">
            <h1 className="text-5xl font-extrabold mb-3">
              {booksDetails?.bookName}
            </h1>
            <p>By : {booksDetails?.author}</p>
          </div>
          <p className="py-2 border-b-1 border-b-gray-300">
            {booksDetails?.category}
          </p>
          <p className="py-2">
            <span className="font-bold">Review :</span> {booksDetails?.review}
          </p>
          <div className="flex gap-3 items-center py-2 border-b-1 border-b-gray-300">
            <span className="font-bold">tag :</span>
            {booksDetails?.tags.map((t) => (
              <span
                key={t}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="py-2">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}

                <tbody>
                  {/* row 1 */}
                  <tr className="border-b-0">
                    <td>Number of Pages:</td>
                    <td className="font-bold">{booksDetails?.totalPages}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-b-0">
                    <td>Publisher:</td>
                    <td className="font-bold">{booksDetails?.publisher}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="border-b-0">
                    <td>Year of Publishing:</td>
                    <td className="font-bold">
                      {booksDetails?.yearOfPublishing}
                    </td>
                  </tr>
                  <tr className="border-b-0">
                    <td>Rating:</td>
                    <td className="font-bold">{booksDetails?.rating}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <button
                onClick={() => handleAddToRead(booksDetails)}
                className="btn btn-outline px-5 py-2"
              >
                Read
              </button>
              <button
                onClick={() => handleAddToWish(booksDetails)}
                className="btn bg-[#50B1C9] text-white px-5 py-5"
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksDetailsPage;
