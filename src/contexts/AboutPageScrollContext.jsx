import { createContext, useContext, useState } from "react";

const AboutPageScrollContext = createContext();

function AboutPageScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <AboutPageScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </AboutPageScrollContext.Provider>
  );
}

function useAboutPageScroll() {
  const context = useContext(AboutPageScrollContext);

  if (context === undefined)
    throw new Error(
      "AboutPageScrollContext was used outside of AboutPageScrollProvider."
    );

  return context;
}

export { AboutPageScrollProvider, useAboutPageScroll };
