import { createContext, useContext, useState } from "react";

const ReportFormPageScrollContext = createContext();

function ReportFormPageScrollProvider({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <ReportFormPageScrollContext.Provider value={{ isScrolled, setIsScrolled }}>
      {children}
    </ReportFormPageScrollContext.Provider>
  );
}

function useReportFormPageScroll() {
  const context = useContext(ReportFormPageScrollContext);

  if (context === undefined)
    throw new Error(
      "ReportFormPageScrollContext was used outside of ReportFormPageScrollProvider."
    );

  return context;
}

export { ReportFormPageScrollProvider, useReportFormPageScroll };
