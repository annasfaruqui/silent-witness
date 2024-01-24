import { createContext, useContext, useState } from "react";

const HomePageScrollContext = createContext();

function HomePageScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <HomePageScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </HomePageScrollContext.Provider>
  );
}

function useHomePageScroll() {
  const context = useContext(HomePageScrollContext);

  if (context === undefined)
    throw new Error(
      "HomePageScrollContext was used outside of HomePageScrollProvider."
    );

  return context;
}

export { HomePageScrollProvider, useHomePageScroll };
