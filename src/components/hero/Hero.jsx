import bannerImg from "../../assets/book1.png";

const Hero = () => {
  return (
    <>
      <div className="hero bg-base-200 min-h-[554px] container mx-auto rounded-2xl my-5">
        <div className="hero-content ">
          <div className="max-w-4xl flex flex-col-reverse  md:flex-row justify-between items-center">
            <div className="text-center md:text-start">
              <h1 className="text-4xl md:text-5xl font-bold mb-5">
                Books to freshen up your bookshelf
              </h1>
              <button className="btn bg-[#23BE0A] text-white rounded-lg">
                View The List
              </button>
            </div>
            <img src={bannerImg} alt="" className="w-[400px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
