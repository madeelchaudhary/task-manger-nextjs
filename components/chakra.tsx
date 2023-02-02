"use client";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "@/theme";

const ChakraWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode}
      ></ColorModeScript>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default ChakraWrapper;
