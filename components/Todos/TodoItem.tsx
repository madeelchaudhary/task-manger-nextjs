"use client";

import { Todo, TodoReducerAction } from "@/types/todo";
import { ListItem, ListIcon, Box, Text } from "@chakra-ui/react";
import { TbUserCheck, TbBusinessplan } from "react-icons/tb";
import TodoAction from "./TodoAction";
import TodoDate from "./TodoDate";

const TodoItem = ({
  todo,
  dispatch,
}: {
  todo: Todo;
  dispatch: React.Dispatch<TodoReducerAction>;
}) => {
  function statusToggleHandler() {
    dispatch({ type: "UPDATE", item: todo });
  }

  function deleteTodoHandler() {
    dispatch({
      type: "DELETE",
      item: todo,
    });
  }

  const todoIcon = todo.category === "work" ? TbBusinessplan : TbUserCheck;
  return (
    <ListItem
      borderRadius="md"
      borderBottom={"2px"}
      borderBottomColor="chakra-border-color"
      borderLeft={"4px"}
      borderLeftColor={
        todo.status === "completed" ? "whatsapp.400" : "gray.300"
      }
    >
      <TodoAction
        onDeleteItem={deleteTodoHandler}
        onStatusToggle={statusToggleHandler}
      >
        <Box cursor={"pointer"} display={"flex"} py="3" px="2">
          <Box
            borderRadius={"50%"}
            border={"2px"}
            borderColor="chakra-border-color"
            display="flex"
            justifyContent={"center"}
            alignItems="center"
            w="65px"
            h="65px"
          >
            <ListIcon
              as={todoIcon}
              boxSize={"8"}
              color="linkedin.400"
              m="0"
            ></ListIcon>
          </Box>
          <Box
            ml={"6"}
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
          >
            <Text
              color={"chakra-body-text"}
              fontWeight="700"
              fontSize={"lg"}
              fontFamily={"heading"}
              letterSpacing="widest"
            >
              {todo.text}
            </Text>
            <Text fontSize={"sm"} color="gray.400">
              {todo.additionals}
            </Text>
          </Box>
          <TodoDate date={todo.date} />
        </Box>
      </TodoAction>
    </ListItem>
  );
};

export default TodoItem;
