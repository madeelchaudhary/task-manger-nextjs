export interface Todo {
  id: string;
  text: string;
  additionals?: string;
  category: "work" | "personal";
  status: "completed" | "ongoing";
  date: string;
}

export interface Data {
  todos: Todo[];
}

export interface TodoReducerAction {
  type: "ADD" | "UPDATE" | "DELETE";
  item: Todo;
}
