"use client";

import TodoContext from "@/context/TodoContext";
import { VStack, Heading, List } from "@chakra-ui/react";
import { useContext } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [{ todos }, dispatch] = useContext(TodoContext);

  if (todos.length <= 0) {
    return (
      <>
        <VStack>
          <Heading as="h3" fontSize="lg">
            No Todos Found!
          </Heading>
        </VStack>
      </>
    );
  }

  return (
    <List spacing={"2"}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </List>
  );
};

export default TodoList;
