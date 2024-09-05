import React from "react";
import useMenu from "@hooks/useMenu";
import useScreenSize from "@hooks/useScreenSize";
import CompanyLogo from "@assets/images/Company.svg";

const Sidebar = () => {
  const { isOpen, setIsOpen, toggleMenu } = useMenu();
  const { isMobile } = useScreenSize();

  console.log(isOpen);
  return (
    <>
      <aside
        className={`app-bar ${isOpen ? "w-64" : "w-0 md:w-14 hover:w-64"} ${
          isMobile ? "absolute top-0 left-0" : "relative"
        }`}
      >
        {/* head */}
        <div className="flex gap-2 items-center p-2">
          <img src={CompanyLogo} className="h-10" alt="Company Logo" />
          <div
            class={`logo-text truncate relative inline-block ${
              !isOpen && "hidden"
            }`}
          >
            <span class="font-bold text-slate-900">Hospital</span>
            <small class="block text-xs text-slate-600 font-medium">
              Management System
            </small>
          </div>
        </div>
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
