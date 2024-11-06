import React, { useEffect, useState } from "react";
import taskService from "../../services/apiServices/tasklistAPI"; // Assuming taskService is correctly set up
import TaskTable from "./TaskTable";

const TaskDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const taskList = await taskService.GetListTask(); // Fetching tasks from the API
        setTasks(taskList); // Set the fetched tasks
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch tasks.");
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="overflow: -webkit-scrollbar: none;">
      <TaskTable tasks={tasks} />{" "}
      {/* Pass the fetched tasks to the TaskTable */}
      <div>
        <h2>Task Table</h2>
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Task ID</th>
              <th>Task Name</th>
              <th>Assigned To</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Completion (%)</th>
              <th>Assigned At</th>
              <th>Deadline</th>
              <th>Remaining Days</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.taskID}>
                <td>{task.taskID}</td>
                <td>{task.taskName}</td>
                <td>{task.assignedTo}</td>
                <td>{task.taskStatus}</td>
                <td>{task.priority}</td>
                <td>{task.complete}%</td>
                <td>{new Date(task.assignAt).toLocaleString()}</td>
                <td>{new Date(task.deadline).toLocaleDateString()}</td>
                <td>{task.remainDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDashboard;
