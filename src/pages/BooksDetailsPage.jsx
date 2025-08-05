import { useContext } from "react";
import { BooksDetailContext } from "../context";

const BooksDetailsPage = () => {
  const { booksDetails } = useContext(BooksDetailContext);
  console.log(booksDetails);
  return (
    <>
      <div className="container mx-auto my-10 flex justify-center gap-10 flex-col md:flex-row">
        <img
          src={booksDetails.image}
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
              <button className="btn btn-outline px-5 py-2">Read</button>
              <button className="btn bg-[#50B1C9] text-white px-5 py-5">
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
