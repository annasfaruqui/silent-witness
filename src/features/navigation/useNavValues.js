import { useAboutPageScroll } from "../../contexts/AboutPageScrollContext";
import { useHomePageScroll } from "../../contexts/HomePageScrollContext";
import { useReportFormPageScroll } from "../../contexts/ReportFormPageScrollContext";

import {
  homeNavlinks_data as homeNavbarLinks,
  aboutNavlinks_data as aboutNavbarLinks,
  reportFormNavlinks_data as reportFormNavbarLinks,
} from "../../assets/data/data-navlinks";

export function useNavValues(page) {
  const { isScrolled: isScrolled1, setIsScrolled: setIsScrolled1 } =
    useHomePageScroll();
  const { isScrolled: isScrolled2, setIsScrolled: setIsScrolled2 } =
    useAboutPageScroll();
  const { isScrolled: isScrolled3, setIsScrolled: setIsScrolled3 } =
    useReportFormPageScroll();

  let isScrolled, setIsScrolled, navbarLinks;

  if (page === "home") {
    isScrolled = isScrolled1;
    setIsScrolled = setIsScrolled1;
    navbarLinks = homeNavbarLinks;
  }

  if (page === "about") {
    isScrolled = isScrolled2;
    setIsScrolled = setIsScrolled2;
    navbarLinks = aboutNavbarLinks;
  }

  if (page === "report form") {
    isScrolled = isScrolled3;
    setIsScrolled = setIsScrolled3;
    navbarLinks = reportFormNavbarLinks;
  }

  return { navbarLinks, isScrolled, setIsScrolled };
}
