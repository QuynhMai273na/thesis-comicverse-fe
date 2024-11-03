import React from 'react';

const Sidebar = () => (
  <div className="bg-gray-900 text-white w-64 p-4 flex flex-col w-full">
    <h2 className="text-lg font-bold mb-4">Task Management</h2>
    <nav className="space-y-2">
      <a href="/home" className="block py-2 px-4 rounded hover:bg-gray-800">Home</a>
      <a href="/tasklist" className="block py-2 px-4 rounded hover:bg-gray-800">Tasks</a>
      <a href="/inbox" className="block py-2 px-4 rounded hover:bg-gray-800">Inbox</a>
      <h3 className="text-sm mt-4 mb-2 text-gray-400">Projects</h3>
      <a href="/Proj1" className="block py-2 px-4 rounded text-blue-400">Project 1</a>
      <a href="/Proj2" className="block py-2 px-4 rounded text-pink-400">Project 2</a>
    </nav>
  </div>
);

export default Sidebar;
