import { Link } from "react-router-dom";

const Navbar = () => {
  const menus = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <Link to={"listed-books"}>Listed Books</Link>
      </li>
      <li>
        <a>Pages to Read</a>
      </li>
      <li className="md:hidden">
        <a>Sign In</a>
      </li>
      <li className="md:hidden">
        <a>Sign Up</a>
      </li>
    </>
  );
  return (
    <>
      <div className="bg-base-100 ">
        <div className="navbar container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menus}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Book Vibe</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{menus}</ul>
          </div>
          <div className="hidden md:flex md:gap-2 navbar-end">
            <a className="btn bg-[#23BE0A] text-white rounded-lg">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white rounded-lg">Sign Up</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
