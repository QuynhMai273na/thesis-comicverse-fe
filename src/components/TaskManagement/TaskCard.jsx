import React from 'react';

const Card = ({ title, count }) => (
  <div className="bg-white shadow p-4 rounded">
    <h3 className="text-gray-600">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default Card;
