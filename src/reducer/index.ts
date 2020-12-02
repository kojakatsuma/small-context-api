import { useMemo } from "react";
import { useSelector } from "react-redux";

type TodoState = { name: string, dueDate: string }
type Action = { type: string; todos: TodoState[] }

const LOAD = 'LOAD';

export const loadTodos = (todos: TodoState[]) => ({ type: LOAD, todos });

export const useTodosGlobal = () => {
  const todoState = useSelector((state: { todos: TodoState[] }) => state.todos)
  return useMemo(() => todoState.map(todo => ({ ...todo, dueDate: new Date(todo.dueDate) })), [todoState])
}

export const Reducer = (state: { todos: TodoState[] } = { todos: [] }, action: Action) => {
  if (action.type === LOAD) {
    return { ...state, todos: action.todos };
  }
  return state;
};
