import React from "react";
import { FaUser, FaUserDoctor } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import ApexCharts from "react-apexcharts";
import BarChart from "./ChartData/BarChart";

const Dashboard = () => {
  return (
    <div className="h-full p-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
        <div>
          <label className="flex items-center gap-2">
            <span className="font-semibold">Welcome,</span>
            <span className="font-normal">John Carter</span>
          </label>
          <small className="text-xs font-normal text-gray-500">
            There is the latest update for the last 7 days.
          </small>
        </div>
        <div className="text-start sm:text-end">Calendar button</div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 pt-3">
        {/* Total Patients */}
        <div className="p-2 rounded-xl bg-indigo-200/40">
          <div className="flex gap-2 items-center mb-4">
            <div className="p-2 bg-white rounded-lg">
              <FaUser className="text-sm font-thin" />
            </div>
            <div className="text-base font-normal text-gray-800">Patient's</div>
          </div>
          <div className="text-base font-bold text-gray-600 mb-4">123,54</div>
        </div>

        {/* Total Doctors */}
        <div className="p-4 rounded-xl bg-amber-200/40">
          <div className="flex gap-2 items-center mb-4">
            <div className="p-2 bg-white rounded-lg">
              <FaUserDoctor className="text-sm font-thin" />
            </div>
            <div className="text-base font-normal text-gray-800">Doctor's</div>
          </div>
          <div className="text-base font-bold text-gray-600">123,54</div>
        </div>

        {/* Earnings */}
        <div className="p-4 rounded-xl bg-lime-200/40">
          <div className="flex gap-2 items-center mb-4">
            <div className="p-2 bg-white rounded-lg">
              <FcMoneyTransfer className="text-sm font-thin" />
            </div>
            <div className="text-base font-normal text-gray-800">Earning's</div>
          </div>
          <div className="text-base font-bold text-gray-600">$ 12,354</div>
        </div>

        {/* Additional Widget */}
        <div className="p-4 rounded-xl bg-teal-200/40">
          <div className="text-base font-bold text-gray-600">04</div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-2 ">
        <div className="col-span-1 sm:col-span-3 p-2 bg-white rounded-lg">
          <BarChart />
        </div>
        <div className="col-span-1 sm:col-span-2 p-2 bg-white rounded-lg">Calender</div>
      </div>
    </div>
  );
};

export default Dashboard;
