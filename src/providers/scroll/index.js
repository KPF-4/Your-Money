import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext([]);

export const ScrollProvider = ({ children }) => {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scroll &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScroll(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scroll]);

  return (
    <ScrollContext.Provider
      value={{ scroll }}
    >
        {children}
    </ScrollContext.Provider>
  );
};
