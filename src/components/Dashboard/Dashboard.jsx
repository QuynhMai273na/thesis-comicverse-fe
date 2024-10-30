import React from "react";
import DashboardStats from "./DashboardStats";
import TransactionChart from "./TransactionChart";
import PublisherChart from "./PublisherChart";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <PublisherChart />
      </div>
    </div>
  );
}

export default Dashboard;
