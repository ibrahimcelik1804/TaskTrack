interface Todo {
  id?: string;
  title: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
}
interface Todos {
  todos: Todo[];
}

export type {Todos, Todo};
