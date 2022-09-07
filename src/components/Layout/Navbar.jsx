import React from "react";
import ToogleTheme from "../ToogleTheme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      {/*start  navbar for phone */}

      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Testimoni</a>
          </li>
        </ul>
      </div>

      {/* end navbar for phone */}

      {/* start navbar for desktop */}
      <div className="navbar-center hidden md:flex mx-auto">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Project</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>Testimoni</a>
          </li>
        </ul>
      </div>
      {/* end navbar for desktop */}
      <div className="navbar-end w-screen ">
        <ToogleTheme />
      </div>
    </div>
  );
};

export default Navbar;
