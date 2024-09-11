import React, { createContext, useEffect, useState } from "react";
import useScreenSize from "@hooks/useScreenSize";

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const { isMobile } = useScreenSize();
  const [isOpen, setIsOpen] = useState(isMobile);

  function toggleMenu() {
    isMobile && setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const ProviderObj = { isOpen, setIsOpen, toggleMenu };
  return (
    <MenuContext.Provider value={ProviderObj}>{children}</MenuContext.Provider>
  );
};
export default MenuContext;
