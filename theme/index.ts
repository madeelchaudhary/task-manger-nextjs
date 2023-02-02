import { extendTheme } from "@chakra-ui/react";
import { Open_Sans, Montserrat } from "@next/font/google";

const openSans = Open_Sans({
  weight: ["300", "700", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: montserrat.style.fontFamily,
    heading: openSans.style.fontFamily,
  },
  breakpoints: {
    sm: "36em",
  },
});

export default theme;
