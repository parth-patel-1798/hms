import React from "react";
import useMenu from "@hooks/useMenu";
import ProfilePicture from "@assets/images/ProfilePicture.webp";
import { FiMenu } from "react-icons/fi";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { Bell, Settings } from "lucide-react";

const Header = () => {
  const { isOpen, setIsOpen } = useMenu();

  return (
    <header className="p-1 flex items-center justify-between">
      <div
        className="cursor-pointer content-center p-2"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <FiMenu />
      </div>

      <section className="flex gap-3 items-center py-1 px-2">
        <Settings
          strokeWidth={1.5}
          size="20"
          className="text-slate-900 cursor-pointer"
        />
        {/* Notificatoin Secton */}
        <Bell
          size={"20"}
          strokeWidth={1.5}
          className="text-slate-900 cursor-pointer"
        />
        {/* profile Secton */}
        <img
          className="h-8 rounded-full cursor-pointer bg-slate-300"
          alt=""
          src={ProfilePicture || ""}
        />
      </section>
    </header>
  );
};

export default Header;
