import { FaRegStar } from "react-icons/fa";
import itemBook from "../../assets/book1.png";

const BooksCard = () => {
  return (
    <>
      <div className="card bg-base-100 max-w-full shadow-sm">
        <figure className="m-5 p-5 bg-base-200">
          <img className="rounded-2xl w-40" src={itemBook} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-3 items-center">
            <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              Young Adult
            </span>
            <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              Identity
            </span>
          </div>
          <div className="border-b-1 border-dashed border-[#13131326] pb-5">
            <h2 className="card-title">The Catcher in the Rye</h2>
            <p>By : Awlad Hossain</p>
          </div>
          <div className="card-actions justify-between items-center my-2">
            <span className="text-lg">Fiction</span>
            <span className="flex items-center gap-1 text-lg">
              5.00
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCard;
