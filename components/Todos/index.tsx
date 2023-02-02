"use client";

import TodoList from "./TodoList";
import { Box, Heading } from "@chakra-ui/react";

const TodosSection = () => {
  return (
    <Box
      as="section"
      p={"8"}
      overflowY="auto"
      maxH="428px"
      css={{
        "::-webkit-scrollbar": {
          width: "2vw",
          maxWidth: ".5rem",
        },
        "::-webkit-scrollbar-track": {
          backgroundColor: "Background",
        },
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "GrayText",
        },
        scrollbarWidth: "thin",
      }}
    >
      <Heading as="h2" fontSize={"md"} textTransform="uppercase" mb={"6"}>
        Todos
      </Heading>
      <TodoList />
    </Box>
  );
};

export default TodosSection;
