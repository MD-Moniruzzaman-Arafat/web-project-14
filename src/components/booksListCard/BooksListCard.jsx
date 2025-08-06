import { CiLocationOn } from "react-icons/ci";
import { IoMdCopy } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import imge from "../../assets/book1.png";

const BooksListCard = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row border border-gray-300 p-5 rounded-2xl items-center gap-5">
        <img
          src={imge}
          alt=""
          className="bg-gray-300 p-5 w-[139px] h-[182px] rounded-2xl"
        />
        <div className="w-full">
          <h1 className="font-bold text-3xl">The Catcher in the Rye</h1>
          <p className="mt-2">By : Awlad Hossain</p>
          <div className="flex flex-col md:flex-row gap-3 items-center py-2 ">
            <span className="font-bold">tag :</span>
            <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              #Young Adult
            </span>
            <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              #Young Adult
            </span>
            <span className="flex items-center gap-2">
              <CiLocationOn /> Year of Publishing: 1924
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 py-2 border-b-1 border-gray-300">
            <span className="flex items-center gap-2">
              <IoPeopleOutline /> Publisher: Scribner
            </span>
            <span className="flex items-center gap-2">
              {" "}
              <IoMdCopy /> Page 192
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-3 py-2">
            <span className="text-[#328EFF] bg-[#328EFF26] px-3 py-1 rounded-full">
              Category: Classic
            </span>
            <span className="text-[#FFAC33] bg-[#FFAC3326] px-3 py-1 rounded-full">
              Rating: 4.5
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
