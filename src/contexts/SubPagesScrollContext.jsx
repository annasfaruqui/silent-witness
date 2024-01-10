import { createContext, useContext, useState } from "react";

const SubPagesScrollContext = createContext();

function SubPagesScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <SubPagesScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </SubPagesScrollContext.Provider>
  );
}

function useSubPagesScroll() {
  const context = useContext(SubPagesScrollContext);

  if (context === undefined)
    throw new Error(
      "SubPagesScrollContext was used outside of SubPagesScrollProvider."
    );

  return context;
}

export { SubPagesScrollProvider, useSubPagesScroll };
