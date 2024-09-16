import React from "react";
import { MenuProvider } from "@contexts/MenuContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="relative h-dvh bg-slate-100 flex">
      <MenuProvider>
        <Sidebar />
        <main className="flex-1 flex flex-col z-10 overflow-hidden">
          <Header />
          <div className="flex-1 overflow-auto">
            <div className="p-2">
              <Outlet />
            </div>
          </div>
        </main>
      </MenuProvider>
    </div>
  );
};

export default MainLayout;
