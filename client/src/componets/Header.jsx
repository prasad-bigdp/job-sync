import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50 px-4 md:px-12 py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-purple-700">JobSync</h1>
      <div className="flex gap-4">
        <button className="border border-purple-700 text-purple-700 px-4 py-1.5 rounded-md hover:bg-purple-50 transition">
          Login
        </button>
        <button className="bg-orange-500 text-white px-4 py-1.5 rounded-md hover:bg-orange-600 transition font-semibold">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
