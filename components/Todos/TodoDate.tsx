"use client";

import { formatDistance } from "date-fns";
import { Box, Text } from "@chakra-ui/react";

const TodoDate = ({ date }: { date: string }) => {
  const formateDate = formatDistance(new Date(date), new Date(), {
    addSuffix: true,
  });

  return (
    <Box ml={"auto"}>
      <Text fontSize="12">{formateDate}</Text>
    </Box>
  );
};

export default TodoDate;
