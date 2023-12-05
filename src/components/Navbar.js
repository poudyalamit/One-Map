import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Navbar = () => {
  return (
    <div className="bg-white p-4 shadow fixed w-full flex justify-between items-center">
    <Link href="#" id="logo" className="text-blue-500 text-lg font-semibold">Your Maps</Link>
    <div className="flex-grow mx-4 flex">
        <input type="text" id="search-input" placeholder="Search..." className="border-none p-2 flex-grow"/>
        <button id="search-btn" className="bg-blue-500 text-white p-2 cursor-pointer">Search</button>
    </div>
</div>
  )
}

export default Navbar
