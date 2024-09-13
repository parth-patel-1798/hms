import React, { createContext, useEffect, useMemo, useState } from "react";
import useScreenSize from "@hooks/useScreenSize";

const MenuContext = createContext(null);

export const MenuProvider = ({ children }) => {
  const { isMobile } = useScreenSize();
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [isHover, setIsHover] = useState(false);

  function toggleMenu() {
    if (isMobile) setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const providerValue = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      isHover,
      setIsHover,
      toggleMenu,
    }),
    [isOpen, isHover, toggleMenu]
  );
  return (
    <MenuContext.Provider value={providerValue}>
      {children}
    </MenuContext.Provider>
  );
};
export default MenuContext;
