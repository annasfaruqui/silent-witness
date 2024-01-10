import { createContext, useContext, useState } from "react";

const HomeScrollContext = createContext();

function HomeScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <HomeScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </HomeScrollContext.Provider>
  );
}

function useHomeScroll() {
  const context = useContext(HomeScrollContext);

  if (context === undefined)
    throw new Error(
      "HomeScrollContext was used outside of HomeScrollProvider."
    );

  return context;
}

export { HomeScrollProvider, useHomeScroll };
