"use client";

import { Box, Text } from "@chakra-ui/react";

const CurrentDate = () => {
  const currentDate = new Date();

  const day = currentDate.toLocaleString("en-us", { day: "numeric" });
  const month = currentDate.toLocaleString("en-us", { month: "short" });
  const year = currentDate.getFullYear();

  return (
    <Box display={"flex"} gap="2">
      <Text as="span">{month}</Text>
      <Text as="span">{day},</Text>
      <Text as="span">{year}</Text>
    </Box>
  );
};

export default CurrentDate;
