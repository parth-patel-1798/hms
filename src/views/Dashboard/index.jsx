import React from "react";

const Dashboard = () => {
  return (
    <div className="h-full p-2">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        <div className="p-2 rounded-xl bg-gradient-to-tr from-indigo-200 via-purple-200 to-pink-200">01</div>
        <div className="p-2 rounded-xl bg-amber-200">02</div>
        <div className="p-2 rounded-xl bg-lime-200">03</div>
        <div className="p-2 rounded-xl bg-teal-200">04</div>
      </div>
    </div>
  );
};

export default Dashboard;
