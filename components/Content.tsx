"use client";

import { TodoProvider } from "@/context/TodoContext";
import { Container, Box } from "@chakra-ui/react";
import AddTodo from "./AddTodo/AddTodo";
import Header from "./Header";
import TodosSection from "./Todos";

const Content = () => {
  return (
    <TodoProvider>
      <Container maxW={"500"} minH="100vh" p="0">
        <Box display={"flex"} flexDir="column" minH="100vh">
          <Header></Header>
          <Box
            flexGrow={"1"}
            bgColor="chakra-subtle-bg"
            color={"chakra-body-text"}
            pos={"relative"}
          >
            <TodosSection />
            <AddTodo />
          </Box>
        </Box>
      </Container>
    </TodoProvider>
  );
};

export default Content;
