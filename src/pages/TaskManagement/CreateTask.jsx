import React, { useState } from 'react';

const AddTaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    assignee: '',
    dueDate: '',
    priority: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Task data:', taskData);
    // Here you can add logic to send data to your backend
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4 border-b pb-2">Add New Task</h2>
        <form onSubmit={handleSubmit}>
          {/* Task Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Task Title</label>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Enter task title"
            />
          </div>

          {/* Task Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={taskData.description}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              rows="4"
              placeholder="Brief description of the task"
            ></textarea>
          </div>

          {/* Assignee */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Assignee</label>
            <input
              type="text"
              name="assignee"
              value={taskData.assignee}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
              placeholder="Assign to (e.g., John Doe)"
            />
          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={taskData.dueDate}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            />
          </div>

          {/* Priority */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={taskData.priority}
              onChange={handleInputChange}
              className="w-full p-2 mt-1 border rounded-md"
            >
              <option value="">Select priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskForm;
