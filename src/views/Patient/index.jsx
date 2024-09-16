import React from "react";

import Avatar1 from "@assets/images/avatars/avatar1.jpg";
import { LuMail, LuPhone } from "react-icons/lu";
import PatientData from "./PatientData.json";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { CiFilter } from "react-icons/ci";

const Patient = () => {
  return (
    <div className="flex flex-col gap-2">
      {/* Breadcrumb */}
      <div>
        <label className="flex items-center gap-2">
          <span className="font-semibold">Patients</span>
        </label>
        <small className="text-xs font-normal text-gray-500">
          {`Dashboard > Patients`}
        </small>
      </div>

      {/* List */}
      <div className="bg-white grid grid-cols-1 gap-3 p-2 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="flex-grow font-medium truncate">Patients List</span>
          <span className="text-lg font-bold cursor-pointer">
            <CiFilter />
          </span>
          <input
            type="search"
            className="border rounded-md p-2 outline-none text-sm w-52"
            placeholder="Search"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-gray-300">
            <thead className="text-sm font-normal w-full bg-gray-200">
              <tr className="text-left">
                <th className="p-2 font-semibold">Name</th>
                <th className="p-2 font-semibold">Age</th>
                <th className="p-2 font-semibold">Contact Info</th>
                <th className="p-2 font-semibold">Address</th>
                <th className="p-2 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {PatientData.map((patient) => (
                <PatientRow key={patient.id} patient={patient} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-2 justify-end items-center inline-flex gap-2 w-full text-sm">
          <span>Row per page :</span>
          <select className="bg-inherit p-1 rounded-md outline-none">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
            <option>All</option>
          </select>
          <span>1-10 of 10</span>
          <button className="text-lg text-gray-500 focus:text-slate-800">
            <MdOutlineChevronLeft />
          </button>
          <button className="text-lg text-gray-500 focus:text-slate-800">
            <MdOutlineChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Patient;

const PatientRow = React.memo(({ patient }) => {
  return (
    <tr className="bg-white hover:bg-gray-100 rounded-md items-center">
      <td className="p-2 flex gap-2">
        <img src={Avatar1} className="h-10 rounded-full" alt="Avatar" />
        <div className="truncate">
          <span className="text-sm font-semibold text-slate-900">
            {patient.name}
          </span>
          <small className="block text-xs text-gray-600">{patient.id}</small>
        </div>
      </td>
      <td className="p-2">{patient.age}</td>
      <td className="p-2 text-xs font-normal truncate">
        <span className="inline-flex gap-1 items-center">
          <LuMail /> {patient.email}
        </span>
        <span className="flex gap-1 items-center">
          <LuPhone /> {patient.phone}
        </span>
      </td>
      <td className="p-2 text-xs font-normal truncate">{patient.address}</td>
      <td className="p-2 float-right flex gap-2">
        <button className="text-slate-900 cursor-pointer">
          <GrEdit />
        </button>
        <button className="text-red-800 cursor-pointer">
          <RiDeleteBinLine />
        </button>
      </td>
    </tr>
  );
});
