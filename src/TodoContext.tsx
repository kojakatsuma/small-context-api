import React, { createContext, useState, useContext, useEffect } from 'react'
import { useTodosGlobal } from './reducer'
import { Todo } from './type'

const TodoContext: React.Context<Partial<{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}>> = createContext({})

export const TodoProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const initialTodo = useTodosGlobal()
  const [todos, setTodos] = useState<Todo[]>(initialTodo)
  
  useEffect(() => {
    setTodos(initialTodo)
  }, [initialTodo])

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodos = () => {
  const { todos, setTodos } = useContext(TodoContext)
  if (!todos || !setTodos) {
    throw new Error('Context has no value.')
  }
  return { todos, setTodos }
}
