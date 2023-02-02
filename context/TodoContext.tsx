"use client";

import { Data, TodoReducerAction } from "@/types/todo";
import React, { createContext, useReducer } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext(
  [] as unknown as [Data, React.Dispatch<TodoReducerAction>]
);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  let data = { todos: [] };
  const jsonData = localStorage.getItem("data");

  if (jsonData) {
    data = JSON.parse(jsonData);
  } else {
    localStorage.setItem("data", JSON.stringify(data));
  }

  const todoHook = useReducer(TodoReducer, data);
  return (
    <TodoContext.Provider value={todoHook}>{children}</TodoContext.Provider>
  );
}

export default TodoContext;
