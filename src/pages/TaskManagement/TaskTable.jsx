import {
  ChevronUpDownIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import taskService from "../../services/apiServices/tasklistAPI"; // Assuming taskService is correctly set up
import { ToastContainer, toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

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
  "Actions",
];

const TaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("authToken");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const tasksList = await taskService.GetListTask();

      setTasks(tasksList);
      console.log(tasks);

      setLoading(false);
    } catch (err) {
      setError("Failed to fetch Tasks.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteTask = async (assignID) => {
    // Delete user with userId
    try {
      if (!authToken) {
        // Redirect to login page if authToken is missing
        navigate("/login");
      } else {
        try {
          // Decode the authToken to get the role
          const decodedToken = jwtDecode(authToken);
          const userRole =
            decodedToken[
              "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ];

          // Check if user has an admin role
          if (userRole !== "Admin" && userRole !== "Manager") {
            toast.error("You are not authorized to delete users.");
          } else {

            const response = await taskService.deleteTask(assignID);
            console.log("rep:",response);

            if (response) {
              toast.success(`Delete ${response.taskName} successfully!`);
              // delay 3s to reload the page
              setTimeout(() => {
                fetchTasks();
              }, 3500);
            } else {
              toast.error(
                "Delete failed"
              );
            }
          }
        } catch (error) {
          // Handle decoding errors (e.g., if authToken is invalid)
          console.error("Invalid authToken:", error);
          navigate("/login");
        }
      }
    } catch (err) {
      setError("Failed to delete user.");
      toast.error(error.response?.data?.description || "Registration failed.");
    }
  };

  // Filter users based on the search query
  const handleSearchTask = () => {
    return tasks.filter((task) => {
      return (
        (task.taskName &&
          task.taskName.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (task.assignedTo &&
          task.assignedTo.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (task.priority &&
          task.priority.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (task.taskStatus &&
          task.taskStatus.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });
  };

  return (
    <div className="h-full w-full bg-white shadow-md rounded-lg">
      <div className="p-6 border-b">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-700">
              Tasks Overview
            </h1>
            <p className="text-gray-500 text-lg">Manage and track all tasks</p>
          </div>

          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search User..."
              value={searchQuery}
              onChange={handleSearchChange}
              required
            />
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
        <div className="overflow-y-auto h-screen p-4">
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
              {handleSearchTask().map((task, index) => {
                const isLast = index === tasks.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-100";

                return (
                  <tr key={task.assignID}>
                    <td className={classes}>
                      <span className="text-gray-700 font-medium">
                        {task.taskName}
                      </span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.assignedTo}</span>
                    </td>
                    <td className={classes}>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-medium rounded ${
                          task.taskStatus === "Completed"
                            ? "bg-green-100 text-green-700"
                            : task.taskStatus === "In Progress" || task.taskStatus === "In progress"
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
                      <span className="text-gray-700">
                        {new Date(task.assignAt).toLocaleDateString()}
                      </span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">
                        {new Date(task.deadline).toLocaleDateString()}
                      </span>
                    </td>
                    <td className={classes}>
                      <span className="text-gray-700">{task.remainDay}</span>
                    </td>
                    <td className={`${classes} flex items-center gap-2`}>
                      <button className="text-blue-500 hover:text-blue-700">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteTask(task.assignID)}
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
      <ToastContainer />
    </div>
  );
};

export default TaskTable;
