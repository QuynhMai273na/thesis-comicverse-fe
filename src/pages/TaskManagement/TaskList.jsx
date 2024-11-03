import React from 'react';
import { Link } from 'react-router-dom';

const TaskListPage = ({ tasks, onEdit }) => (
  <div className="p-8 bg-gray-100 min-h-screen">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold">All Tasks</h2>
      <Link to="/add-task" className="bg-blue-500 text-white py-2 px-4 rounded">
        + Add Task
      </Link>
    </div>

    {/* Filters and Sort */}
    <div className="flex justify-between items-center mb-4">
      <button className="text-gray-600 underline">Filters</button>
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" />
        <label className="mr-4">Show marked as done</label>
        <span>Sort by:</span>
        <select className="ml-2 border p-1 rounded">
          <option value="dueDate">Due Date</option>
          <option value="creationDate">Creation Date</option>
        </select>
      </div>
    </div>

    {/* Task Table */}
    <div className="bg-white shadow rounded">
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-4 border-b text-gray-500">Description</th>
            <th className="p-4 border-b text-gray-500">Assignee</th>
            <th className="p-4 border-b text-gray-500">Type</th>
            <th className="p-4 border-b text-gray-500">Due Date</th>
            <th className="p-4 border-b text-gray-500">Creation Date</th>
            <th className="p-4 border-b text-gray-500">Document</th>
            <th className="p-4 border-b text-gray-500"></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id} className="border-t">
              <td className="p-4">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <p className="text-gray-500">{task.description}</p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-gray-700">{task.assignee || 'Unassigned'}</td>
              <td className="p-4 text-gray-700">{task.type}</td>
              <td className="p-4 text-gray-700">{task.dueDate}</td>
              <td className="p-4 text-gray-700">{task.creationDate}</td>
              <td className="p-4 text-blue-500 hover:underline">{task.document || 'No document'}</td>
              <td className="p-4 text-right">
                <button
                  onClick={() => onEdit(task.id)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default TaskListPage;