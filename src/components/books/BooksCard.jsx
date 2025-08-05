import { FaRegStar } from "react-icons/fa";

const BooksCard = ({ data }) => {
  return (
    <>
      <div className="card bg-base-100 max-w-full shadow-sm">
        <figure className="m-5 p-5 bg-base-200">
          <img
            className="rounded-2xl w-[134px] h-[166px]"
            src={data?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex gap-3 items-center">
            {data?.tags.map((t) => (
              <span
                key={t}
                className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold"
              >
                {t}
              </span>
            ))}
            {/* <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              Young Adult
            </span>
            <span className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-1 rounded-full font-semibold">
              Identity
            </span> */}
          </div>
          <div className="border-b-1 border-dashed border-[#13131326] pb-5">
            <h2 className="card-title">{data?.bookName}</h2>
            <p>By : {data?.author}</p>
          </div>
          <div className="card-actions justify-between items-center my-2">
            <span className="text-lg">{data?.category}</span>
            <span className="flex items-center gap-1 text-lg">
              {data?.rating}
              <FaRegStar />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BooksCard;
