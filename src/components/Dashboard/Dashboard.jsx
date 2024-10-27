import React from "react";
import RecentComic from "./RecentComic";
import ComicList from "./ComicList";

function Dashboard() {
  return (
    <div className="flex flex-col items-center gap-4">
        <RecentComic/>
        <ComicList/>
    </div>
  );
}

export default Dashboard;
