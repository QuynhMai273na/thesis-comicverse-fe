import React from "react";

function PublisherChart() {
    return (
        <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
            <strong className="text-gray-700 font-medium">Publisher</strong>
            <div className="w-full mt-3 flex-1 text-xs">
                <div className="h-[300px] w-full bg-gray-200 rounded-sm"></div>
            </div>
        </div>
    );
}

export default PublisherChart;