import React from "react";

function RecentPublish() {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-grey-200 flex-1">
        <strong className="text-gray-700 font-large">Recent Publish</strong>
        <div className="w-full mt-3 flex-1 text-xs">
            <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex-1">Title</div>
            <div className="w-20">Date</div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex-1">How to create a website</div>
            <div className="w-20">21 Sep</div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex-1">How to create a website</div>
            <div className="w-20">21 Sep</div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex-1">How to create a website</div>
            <div className="w-20">21 Sep</div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-2">
            <div className="flex-1">How to create a website</div>
            <div className="w-20">21 Sep</div>
            </div>
        </div>
        </div>
    );
    }

export default RecentPublish;