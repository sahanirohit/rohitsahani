import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { open, close } from "../features/stateSlice";
import { RootState } from "../store";

const Navbar = () => {
  const nav = useSelector((state: RootState) => state.nav.value);
  const dispatch = useDispatch();
  return (
    <header
      className={`h-24 flex w-full bg-white z-50 fixed top-0 items-center justify-center`}>
      <nav
        className={`max-w-screen-xl shadow-md sm:shadow-none bg-white h-24  px-4 xl:px-0 mx-auto flex items-center justify-between w-full`}>
        <div className="flex items-center w-full justify-between md:w-auto z-50">
          <Link href={"/"}>
            <h1 className="text-2xl font-black font-[roboto]">& CUI</h1>
          </Link>
          <div className="md:hidden text-2xl">
            {nav ? (
              <i
                onClick={() => dispatch(close())}
                className={`fa-solid w-10 h-10 fa-xmark cursor-pointer flex items-center justify-center`}></i>
            ) : (
              <i
                onClick={() => dispatch(open())}
                className={`fa-solid fa-bars cup cursor-pointer w-10 h-10 flex items-center justify-center`}></i>
            )}
          </div>
        </div>
        {/* Mobile Nav */}
        <ul
          className={`fixed ${
            nav ? "translate-x-0" : "translate-x-full"
          } duration-200 top-0 left-0 bg-white w-full h-full flex items-center justify-center flex-col space-y-10`}>
          <li>
            <Link
              onClick={() => dispatch(close())}
              className={`link active`}
              href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(close())}
              className={`link`}
              href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(close())}
              className={`link`}
              href={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(close())}
              className={`link`}
              href={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              onClick={() => dispatch(close())}
              className={`link`}
              href={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          <li>
            <button onClick={() => dispatch(close())} className="btn">
              Sign In
            </button>
          </li>
        </ul>
        {/* Desktop Nav */}
        <ul className="md:flex items-center space-x-6 font-serif font-medium hidden">
          <li>
            <Link className={`link active`} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className={`link`} href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className={`link`} href={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link className={`link`} href={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link className={`link`} href={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          <button className="btn">Sign In</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
