"use client";

import TodoContext from "@/context/TodoContext";
import { Box, Text, CircularProgress } from "@chakra-ui/react";
import { useContext } from "react";

const Progress = () => {
  const [{ todos }] = useContext(TodoContext);

  let progressContent = <Text>Empty</Text>;

  if (todos.length > 0) {
    const completedTodos = todos.reduce((preValue, curValue) => {
      if (curValue.status === "completed") {
        return preValue + 1;
      }
      return preValue;
    }, 0);

    const percentage = Math.round((completedTodos / todos.length) * 100);
    progressContent = (
      <>
        <CircularProgress value={percentage} size="8" color={"cyan.600"} />
        <Text>{percentage}% done</Text>
      </>
    );
  }

  return (
    <Box display="flex" alignItems="center" gap="4">
      {progressContent}
    </Box>
  );
};

export default Progress;
