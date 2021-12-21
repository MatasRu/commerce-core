import { useMediaQuery } from "react-responsive";

export const smMobile = "(max-width: 24rem)"; //384px;
export const mobile = "(max-width: 30rem)"; //480px;
export const tablet = "(max-width: 48rem)"; //768px;
export const laptop = "(max-width: 64rem)"; // 1024px;
export const desktop = "(max-width: 80rem)"; // 1280px;
export const laptopXl = "(max-width: 90rem)"; // 1440px;

export const useQuery = () => ({
  isSmMobile: useMediaQuery({ query: smMobile }),
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: tablet }),
  isDesktop: useMediaQuery({query: desktop}),
  isLaptop: useMediaQuery({ query: laptop }),
});

// 480px, 768px, 1024px, and 1280px
