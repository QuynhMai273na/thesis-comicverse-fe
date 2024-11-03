import React from 'react';

const Header = () => (
  <div className="flex items-center justify-between bg-white p-4 shadow">
    <div className="flex space-x-4">
      <button className="text-gray-600 font-semibold">Overview</button>
      <button className="text-gray-600 font-semibold">List</button>
      <button className="text-gray-600 font-semibold">Board</button>
      <button className="text-gray-600 font-semibold border-b-2 border-purple-500">Dashboard</button>
      <button className="text-gray-600 font-semibold">More...</button>
    </div>
    <div className="flex space-x-4 items-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Chart</button>
      <input type="text" placeholder="Search" className="border rounded px-2 py-1" />
      <button className="bg-gray-200 p-2 rounded-full">👤</button>
    </div>
  </div>
);

export default Header;
