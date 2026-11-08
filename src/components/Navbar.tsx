'use client';
import Image from 'next/image';
import logo from '/public/logo.png';

import NavLinks from './NavLinks';
import Link from 'next/link';

const Navbar = () => {
const navLinks=(
    <>
    <li>
        <NavLinks href="/">Workouts</NavLinks>
    </li>
    <li>
        <NavLinks href="/myplan">My Plan</NavLinks>
    </li>

    </>
);


    return (
        <div className="navbar container mx-auto bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          aria-label="Menu"
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
            strokeWidth={2}
            d="M4 6h16M4 12h8m-8 6h16"
          />{" "}
        </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >

        {navLinks}

      </ul>
    </div>

    <a className="btn btn-ghost flex items-center gap-2 text-xl">
    <Image src={logo} alt="Logo" width={45} height={45} />
    <span className="text-2xl font-extrabold tracking-wider">
        FITLOG
    </span>
</a>


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">

     {navLinks}

    </ul>
  </div>
  <div className="navbar-end">
    <Link className='btn' href={"./MyBuild"}><button>Plan (0)</button> </Link>
    <Link className='btn' href={"./MyBuild"}><button>Saved (0)</button></Link>
  </div>
</div>

    );
};

export default Navbar;