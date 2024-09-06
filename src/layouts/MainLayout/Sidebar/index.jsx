import React, { useState } from "react";
import useMenu from "@hooks/useMenu";
import useScreenSize from "@hooks/useScreenSize";
// import CompanyLogo from "@assets/images/svg/Company.svg";
import CompanyLogo from "@assets/images/svg/Company2.svg";

// icons
import { FaCaretRight } from "react-icons/fa6";

import MenuItems from "./MenuItems";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const locationName = location.pathname;
  const { isOpen, setIsOpen, isHover, setIsHover, toggleMenu } = useMenu();
  const { isMobile } = useScreenSize();

  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSubmenu = (i) => {
    if (activeSubmenu === i) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(i);
    }
  };

  return (
    <>
      <aside
        className={`app-bar ${isOpen ? "w-64" : "w-0 md:w-[47px] hover:w-64"} 
        ${isMobile ? "absolute top-0 left-0" : "relative"}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <nav
          className={`truncate md:whitespace-normal p-2 flex-1 flex flex-col gap-5`}
        >
          {/* <nav
          className={` ${
            isOpen ? "p-2" : "p-0 md:p-2"
          } flex-1 flex flex-col gap-5`}
        > */}
          {/* head */}
          <div className={`app-bar-title`}>
            <img src={CompanyLogo} className="h-10" alt="Company Logo" />
            <div
              className={`logo-text truncate relative inline-block`}
            >
              <span className="font-bold text-slate-900">Human</span>
              <small className="block text-xs text-slate-600 font-medium">
                Management System
              </small>
            </div>
          </div>

          {/* Menu */}
          <div className="app-bar-menu">
            <ul className="flex flex-col gap-3 py-2">
              {MenuItems.map((menu, i) => (
                <li key={i} className={`inline-flex gap-2 items-center`}>
                  <div className="pl-1 truncate md:whitespace-normal md:overflow-visible">
                    <span className="text-2xl font-thin">{menu.icon}</span>
                  </div>
                  <div className="truncate flex-1 flex justify-between items-center">
                    <span className="truncate">{menu.title}</span>
                    <span className="truncate">
                      <ChevronDown strokeWidth={1.25} size={"18px"} />
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
      <div
        className={`fixed inset-0 bg-black ${
          isOpen ? "bg-opacity-50 z-30" : "bg-opacity-0 z-0"
        } transition-all duration-300 md:hidden`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Sidebar;
