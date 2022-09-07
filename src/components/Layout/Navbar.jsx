import React from "react";
import ToogleTheme from "../ToogleTheme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 p-8">
      <div className="navbar-start md:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
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
      </div>

      <div className="navbar-center hidden md:flex ">
        <a className="btn btn-ghost normal-case text-lg">Home</a>
        <a className="btn btn-ghost normal-case text-lg">About</a>
        <a className="btn btn-ghost normal-case text-lg">Project</a>
        <a className="btn btn-ghost normal-case text-lg">Blog</a>
        <a className="btn btn-ghost normal-case text-lg">Testimoni</a>
      </div>
      <div className="navbar-end mr-6">
        <ToogleTheme />
      </div>
    </div>
  );
};

export default Navbar;
