import { Data, TodoReducerAction } from "@/types/todo";

export default function TodoReducer(state: Data, action: TodoReducerAction) {
  if (action.type === "ADD") {
    const updatedState: Data = { todos: [action.item, ...state.todos] };
    setData(updatedState);
    return updatedState;
  } else if (action.type === "DELETE") {
    const updatedState: Data = {
      todos: state.todos.filter((prevTodo) => prevTodo.id !== action.item.id),
    };
    setData(updatedState);
    return updatedState;
  } else if (action.type === "UPDATE") {
    const updatedState: Data = {
      todos: state.todos.map((prevTodo) => {
        if (prevTodo.id === action.item.id) {
          return {
            ...prevTodo,
            status: prevTodo.status === "completed" ? "ongoing" : "completed",
          };
        }
        return prevTodo;
      }),
    };
    setData(updatedState);
    return updatedState;
  } else {
    throw new Error("No Action Exist!");
  }
}

function setData(data: Data) {
  localStorage.setItem("data", JSON.stringify(data));
}
