"use client";

import { Box, Heading, HStack, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import CurrentDate from "./CurrentDate";
import Progress from "./Progress";
import StatLabels from "./StatLabels";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      minH={"xs"}
      bg={"blackAlpha.200"}
      bgImage="/bg_1.jpg"
      bgBlendMode={"multiply"}
      bgRepeat="no-repeat"
      bgSize={"cover"}
      p="8"
      color={"gray.50"}
      pos="relative"
      zIndex="banner"
    >
      <Box
        pos="absolute"
        right="0"
        bottom="0"
        top="0"
        zIndex="hide"
        w={"45%"}
        bgColor={"blackAlpha.400"}
      ></Box>
      <Box>
        <Box as="button" onClick={toggleColorMode}>
          {colorMode === "dark" ? (
            <FaSun size={"30"} color="#F6E05E" />
          ) : (
            <FaMoon size={"30"} color="#F7FAFC" />
          )}
        </Box>
      </Box>
      <Box mt={"8"}>
        <HStack justify={"space-between"} align="flex-end">
          <Heading
            as={"h1"}
            textTransform="uppercase"
            fontWeight={300}
            fontSize="5xl"
          >
            Your <br />
            Tasks
          </Heading>
          <Box display={"flex"} gap="10" fontSize="md" lineHeight={"short"}>
            <StatLabels />
          </Box>
        </HStack>
      </Box>
      <Box mt={"12"}>
        <HStack justify={"space-between"}>
          <CurrentDate />
          <Progress />
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
