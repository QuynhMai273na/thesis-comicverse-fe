import React from 'react';

const Chart = ({ title }) => (
  <div className="bg-white shadow p-4 rounded">
    <h3 className="text-gray-600 mb-4">{title}</h3>
    <div className="h-32 flex items-center justify-center">
      {/* Placeholder for the chart */}
      <div className="text-gray-400">[Chart]</div>
    </div>
  </div>
);

export default Chart;
