"use client";

import TodoContext from "@/context/TodoContext";
import { Flex, Text } from "@chakra-ui/react";
import { useContext } from "react";

const StatLabels = () => {
  const [{ todos }] = useContext(TodoContext);

  const stats = {
    work: 0,
    personal: 0,
  };

  if (todos.length > 0) {
    todos.forEach((todo) => {
      stats[todo.category] += 1;
    });
  }

  return (
    <>
      <Flex direction={"column"}>
        <Text textAlign={"right"} fontSize="4xl">
          {stats.personal}
        </Text>
        <Text>Personal</Text>
      </Flex>
      <Flex direction={"column"}>
        <Text textAlign={"right"} fontSize="4xl">
          {stats.work}
        </Text>
        <Text>Work</Text>
      </Flex>
    </>
  );
};

export default StatLabels;
