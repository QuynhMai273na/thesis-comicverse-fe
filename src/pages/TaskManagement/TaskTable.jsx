import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";

// Table headers for tasks
const TABLE_HEAD = [
  "Task Name",
  "Assigned To",
  "Status",
  "Priority",
  "Progress (%)",
  "Assigned At",
  "Deadline",
  "Remaining Days",
  "Actions"
];

const TaskTable = ({ tasks, onDelete }) => {
  return (
    <div className="h-full w-full bg-white shadow-md rounded-lg">
      <div className="p-6 border-b">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">Tasks Overview</h1>
            <p className="text-gray-500 text-lg">Manage and track all tasks</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <button className="border border-gray-300 text-sm px-4 py-2 rounded hover:bg-gray-100">
              View all
            </button>
            <button className="flex items-center gap-2 text-sm px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              <PlusIcon className="h-4 w-4" /> Add Task
            </button>
          </div>
        </div>

        {/* Table Body with Scroll */}
        <div className="overflow-y-auto max-h-80 p-4">
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-b p-4 text-sm font-semibold text-gray-600"
                  >
                    <div className="flex items-center justify-between">
                      {head}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => {
                const isLast = index === tasks.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-gray-100";

                return (
                  <tr key={task.taskID}>
                    <td className={classes}>
                      <span className="text-gray-700 font-medium">{task.taskName}</span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.assignedTo}</span>
                    </td>
                    <td className={classes}>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          task.taskStatus === "Completed"
                            ? "bg-green-100 text-green-700"
                            : task.taskStatus === "In Progress"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {task.taskStatus}
                      </span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.priority}</span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.complete}%</span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{new Date(task.assignAt).toLocaleDateString()}</span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{new Date(task.deadline).toLocaleDateString()}</span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.remainDay}</span>
                    </td>
                    <td className={`${classes} flex items-center gap-2`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => onDelete(task.taskID)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="p-4 border-t flex items-center justify-between">
        <span className="text-sm text-gray-600">Page 1 of 10</span>
        <div className="flex gap-2">
          <button className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Previous
          </button>
          <button className="text-sm px-4 py-2 border border-gray-300 rounded hover:bg-gray-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskTable;
