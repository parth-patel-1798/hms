import React from 'react';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

const Pagination = () => {
    return (
        <div className="justify-end items-center inline-flex gap-2 w-full text-sm">
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
    );
};

export default Pagination;
