import React, { useEffect, useState } from "react";
import useMenu from "@hooks/useMenu";
import useScreenSize from "@hooks/useScreenSize";
// import CompanyLogo from "@assets/images/svg/Company.svg";
import CompanyLogo from "@assets/images/svg/Company2.svg";

// icons
import { FaCaretRight } from "react-icons/fa6";

import MenuItems from "./MenuItems";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import SubMenu from "./SubMenu";

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

  useEffect(() => {
    const locationArray = locationName.replace(/^\/+/, "").split("/");
    let submenuIndex = null;

    MenuItems.map((menu, i) => {
      if (!menu.child) {
        const menuLinkArray = menu.link.replace(/^\/+/, "").split("/");
        if (menuLinkArray.some((val) => locationArray.includes(val))) {
          submenuIndex = i;
        }
      } else {
        menu.child.map((cmenu) => {
          if (!cmenu.child) {
            const childMenuLinkArray = cmenu.link
              .replace(/^\/+/, "")
              .split("/");
            if (childMenuLinkArray.some((val) => locationArray.includes(val))) {
              submenuIndex = i;
              locationArray;
            }
          }
        });
      }
    });
    setActiveSubmenu(submenuIndex);

    // const findActiveSubmenu = (menuItems, locationName) => {
    //   let submenuIndex = null;

    //   menuItems.forEach((menu, i) => {
    //     // console.log(menu.link.replace(/^\/+/, "").split("/"))
    //     if (menu.link === locationName) {
    //       submenuIndex = i;
    //     } else if (menu.child) {
    //       const ciIndex = menu.child.findIndex(
    //         (ci) => ci.link === locationName
    //       );
    //       if (ciIndex !== -1) {
    //         submenuIndex = i;
    //       } else {
    //         // Recursively check for nested child menus
    //         menu.child.forEach((subMenu) => {
    //           if (subMenu.link === locationName) {
    //             submenuIndex = i; // set the parent index
    //           }
    //         });
    //       }
    //     }
    //   });

    // console.log(submenuIndex);

    // return submenuIndex;
    // };

    // const activeIndex = findActiveSubmenu(MenuItems, locationName);
    // ;

    document.title = `Dashcode | ${locationName.replace(/\//g, "")}`;
  }, [location]);

  return (
    <>
      <aside
        className={`app-bar ${isOpen ? "w-64" : "w-0 md:w-[56px] hover:w-64"} 
        ${isMobile ? "absolute top-0 left-0" : "relative"}`}
        // onMouseEnter={() => setIsHover(true)}
        // onMouseLeave={() => setIsHover(false)}
      >
        <nav className={`truncate md:whitespace-normal flex-1 flex flex-col`}>
          {/* head */}
          <div className="p-2">
            <div className={`app-bar-title px-2 pt-1 pb-3`}>
              <img src={CompanyLogo} className="h-10" alt="Company Logo" />
              <div className={`logo-text truncate relative inline-block`}>
                <span className="font-semibold text-slate-900">
                  Human Research
                </span>
                <small className="block text-xs text-slate-500 font-medium">
                  Management System
                </small>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="app-bar-menu overflow-auto p-2">
            <ul className="flex flex-col gap-1 py-2">
              {MenuItems.map((menu, i) => (
                <li key={i}>
                  {!menu.child ? (
                    <NavLink
                      to={menu.link}
                      className={`w-full cursor-pointer inline-flex gap-2 items-center rounded-lg hover:bg-cyan-400/20 hover:text-cyan-800 hover:font-medium py-2`}
                      onClick={() => toggleSubmenu(i)}
                    >
                      <div className="pl-2 truncate md:whitespace-normal md:overflow-visible">
                        <span className="text-xl font-thin">{menu.icon}</span>
                      </div>
                      <div className="truncate flex-1 flex justify-between items-center pr-2">
                        <span className="truncate text-sm font-medium">
                          {menu.title}
                        </span>
                      </div>
                    </NavLink>
                  ) : (
                    <>
                      <div
                        className={`w-full cursor-pointer inline-flex gap-2 items-center rounded-lg hover:bg-cyan-400/20 hover:text-cyan-800 hover:font-medium py-2`}
                        onClick={() => toggleSubmenu(i)}
                      >
                        <div className="pl-2 truncate md:whitespace-normal md:overflow-visible">
                          <span className="text-xl font-thin">{menu.icon}</span>
                        </div>
                        <div className="truncate flex-1 flex justify-between items-center pr-2">
                          <span className="truncate text-sm font-medium">
                            {menu.title}
                          </span>
                          <span
                            className={`truncate ${
                              activeSubmenu === i ? "rotate-90" : ""
                            }`}
                          >
                            <ChevronDown strokeWidth={1.5} size={"18px"} />
                          </span>
                        </div>
                      </div>
                      <SubMenu
                        activeSubmenu={activeSubmenu}
                        item={menu}
                        i={i}
                        locationName={locationName}
                      />
                    </>
                  )}
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
