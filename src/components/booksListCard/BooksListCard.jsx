import { CiLocationOn } from "react-icons/ci";
import { IoMdCopy } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";

const BooksListCard = ({ book }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row border border-gray-300 p-5 rounded-2xl items-center gap-5 my-2">
        <img
          src={book?.image}
          alt=""
          className="bg-gray-300 p-5 w-[139px] h-[182px] rounded-2xl"
        />
        <div className="w-full">
          <h1 className="font-bold text-3xl">{book?.bookName}</h1>
          <p className="mt-2">By :{book?.author}</p>
          <div className="flex flex-col md:flex-row gap-3 items-center py-2 ">
            <span className="font-bold">tag :</span>
            {book?.tags.map((t) => (
              <span
                key={t}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold"
              >
                #{t}
              </span>
            ))}
            <span className="flex items-center gap-2">
              <CiLocationOn /> Year of Publishing: {book?.yearOfPublishing}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 py-2 border-b-1 border-gray-300">
            <span className="flex items-center gap-2">
              <IoPeopleOutline /> Publisher: {book?.publisher}
            </span>
            <span className="flex items-center gap-2">
              {" "}
              <IoMdCopy /> Page {book?.totalPages}
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 py-2">
            <span className="text-[#328EFF] bg-[#328EFF26] px-3 py-1 rounded-full">
              Category: {book?.category}
            </span>
            <span className="text-[#FFAC33] bg-[#FFAC3326] px-3 py-1 rounded-full">
              Rating: {book?.rating}
            </span>
            <span className="text-white bg-[#23BE0A] px-3 py-1 rounded-full">
              View Details
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksListCard;
