import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/">
        <span className="text-2xl font-bold">My App</span>
      </Link>
      <ul className="flex justify-end">
        <li className="mr-6">
          <Link href="/about">
           <span>about</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;