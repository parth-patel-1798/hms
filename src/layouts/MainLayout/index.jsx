import { MenuProvider } from "@contexts/MenuContext";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen bg-slate-100 flex">
      <MenuProvider>
        <Sidebar />
        <main className="flex-1 flex flex-col z-10">
          <Header />
          <div className="px-1 py-0.5 overflow-auto h-full">
            <Outlet />
          </div>
        </main>
      </MenuProvider>
    </div>
  );
};

export default MainLayout;
