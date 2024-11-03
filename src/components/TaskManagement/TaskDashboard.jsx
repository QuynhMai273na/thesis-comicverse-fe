import React from 'react';
import Card from './TaskCard';
import Chart from './TaskChart';

const Dashboard = () => (
  <div className="p-4 grid grid-cols-4 gap-4">
    <Card title="Completed Tasks" count={100} />
    <Card title="Incomplete Tasks" count={18} />
    <Card title="Overdue Tasks" count={4} />
    <Card title="Total Tasks" count={118} />
    <Chart title="Incomplete Tasks by Section" />
    <Chart title="All Tasks by Completion Status" />
    <Chart title="Upcoming Tasks by Assignee" />
    <Chart title="Task Completion Over Time" />
  </div>
);

export default Dashboard;
