import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [experience, setExperience] = useState('');

  return (
    <div className="bg-base-100 shadow-sm w-full px-4 md:px-20">
      <div className="flex justify-between items-center py-2 md:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Jobs</a></li>
            <li>
              <a>Services</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        <a className="text-xl font-semibold">Foundit</a>
        <button className="px-3 py-1 text-sm bg-orange-500 text-white rounded">Register</button>
      </div>
      <div className="hidden md:flex navbar w-full items-center justify-between">
        <div className="navbar-start">
          <a className="btn btn-ghost text-2xl">sams</a>
          
        </div>

        <div className="navbar-center">
          <div className="join">
            <input
              className="input input-bordered join-item"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <input
              className="input input-bordered join-item"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <select
              className="select select-bordered join-item"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Experience</option>
              <option>Fresher</option>
              <option>1 Year</option>
              <option>2 Years</option>
              <option>3 Years</option>
              <option>4 Years</option>
              <option>5 Years</option>
            </select>

            <Link
              to={`/jobs?search=${encodeURIComponent(search)}&location=${encodeURIComponent(location)}&experience=${encodeURIComponent(experience)}`}
              className="btn join-item"
            >
              Search
            </Link>
          </div>
        </div>

        <div className="navbar-end space-x-2">
          <button className="px-3 py-2 rounded text-blue-900 border">Login</button>
          <button className="px-3 py-2 border bg-orange-500 rounded text-white">Register</button>
          <div>|</div>
          <div className="font-semibold">Employers Login</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
