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
      <TaskTable tasks={tasks} /> {/* Pass the fetched tasks to the TaskTable */}
    </div>
  );
};

export default TaskDashboard;
