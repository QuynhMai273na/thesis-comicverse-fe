import React from "react";
import DashboardStats from "./DashboardStats";
import TransactionChart from "./TransactionChart";
import PublisherChart from "./PublisherChart";
import RecentPublish from "./RecentPublish";
import PopularComic from "./PopularComic";

function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStats />
      <div className="flex flex-row gap-4 w-full">
        <TransactionChart />
        <PublisherChart />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <RecentPublish />
        <PopularComic />
      </div>
    </div>
  );
}

export default Dashboard;
