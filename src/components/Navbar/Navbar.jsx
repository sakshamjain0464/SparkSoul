import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav className="sm:h-[8vh] h-fit bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <NavLink to={"/"}>
                  <h1 className="text-2xl text-white font-semibold">
                    SparkSoul
                  </h1>
                </NavLink>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } rounded-md px-3 py-2 text-sm font-medium`
                    }>
                    Home
                  </NavLink>
                  <NavLink
                    to="/quotes"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } rounded-md px-3 py-2 text-sm font-medium`
                    }>
                    Quotes
                  </NavLink>
                  <NavLink
                    to="/inspiration"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } rounded-md px-3 py-2 text-sm font-medium`
                    }>
                    Inspiration
                  </NavLink>
                  <NavLink
                    to="/advice"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white"
                      } rounded-md px-3 py-2 text-sm font-medium`
                    }>
                    Today&apos;s Advice
                  </NavLink>
                </div>
              </div>
            </div>
            <a
              href="https://github.com/sakshamjain0464/SparkSoul"
              className="hidden sm:block"
              target="_blank"
              rel="noreferrer">
              <i className="fa-brands fa-github text-3xl text-gray-300 cursor-pointer hover:text-white"></i>
            </a>
          </div>
        </div>
        <div className="w-full text-white flex justify-center text-xl pb-2">
          <i
            className={`fa-solid ${navOpen ? "fa-xmark" : "fa-bars"} sm:hidden`}
            onClick={() => setNavOpen((prev) => !prev)}></i>
        </div>

        <div className={`${navOpen ? "block" : "hidden"}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-center ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`
              }
              aria-current="page">
              Home
            </NavLink>
            <NavLink
              to="/quotes"
              className={({ isActive }) =>
                `text-center ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`
              }>
              Quotes
            </NavLink>
            <NavLink
              to="/inspiration"
              className={({ isActive }) =>
                `text-center ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`
              }>
              Inspiration
            </NavLink>
            <NavLink
              to="/advice"
              className={({ isActive }) =>
                `text-center ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } block rounded-md px-3 py-2 text-base font-medium`
              }>
              Today&apos;s Advice
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
