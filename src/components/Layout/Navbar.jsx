import React from "react";
import { Link } from "react-router-dom";
import ToogleTheme from "../ToogleTheme";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 p-8">
      {/* navbar PHONE */}
      <div className="navbar-start md:hidden ">
        <div className="dropdown -ml-4">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/GuestBook">GuestBook</Link>
            </li>
          </ul>
        </div>
      </div>
      {/*  END navbar PHONE */}

      <div className="navbar-center hidden md:flex ">
        <Link to="/" className="btn btn-ghost normal-case text-lg">
          Home
        </Link>
        <Link Link to="/about" className="btn btn-ghost normal-case text-lg">
          About
        </Link>
        <Link to="/project" className="btn btn-ghost normal-case text-lg">
          Project
        </Link>
        <Link to="/Blog" className="btn btn-ghost normal-case text-lg">
          Blog
        </Link>
        <Link to="/GuestBook" className="btn btn-ghost normal-case text-lg">
          GuestBook
        </Link>
      </div>
      <div className="navbar-end mr-6">
        <ToogleTheme />
      </div>
    </div>
  );
};

export default Navbar;
