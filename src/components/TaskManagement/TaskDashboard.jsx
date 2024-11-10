import Card from "./TaskCard";
import Chart from "./TaskChart";
import React, { useEffect, useState } from "react";
import taskService from "../../services/apiServices/tasklistAPI"; // Assuming taskService is correctly set up

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [inProgrssTasks, setinProgrssTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const taskList = await taskService.GetListTask(); // Fetching tasks from the API

        // Filter completed tasks
        const completedTasks = taskList.filter((task) => task.taskStatus === "Completed");
        const countCompletedTasks = completedTasks.length;

        // Filter in-progress tasks
        const inProgressTasks = taskList.filter((task) => task.taskStatus === "In Progress" || task.taskStatus === "In progress");
        const countInProgressTasks = inProgressTasks.length;

        // Filter pending tasks
        const pendingTasks = taskList.filter((task) => task.taskStatus === "Pending");
        const countPendingTasks = pendingTasks.length;


        setPendingTasks(countPendingTasks);
        setinProgrssTasks(countInProgressTasks);
        setCompletedTasks(countCompletedTasks);
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
    <div className="p-4 grid grid-cols-4 gap-4">
      <Card title="Completed Tasks" count={completedTasks} />
      <Card title="In Progress Tasks" count={inProgrssTasks} />
      <Card title="Pending Tasks" count={pendingTasks} />
      <Card title="Total Tasks" count={tasks.length} />
      <Chart title="Incomplete Tasks by Section" />
      <Chart title="All Tasks by Completion Status" />
      <Chart title="Upcoming Tasks by Assignee" />
      <Chart title="Task Completion Over Time" />
    </div>
  );
};

export default Dashboard;
