import React, { createContext, useState, useContext } from 'react'

type Todo = { name: string; dueDate: Date }

const TodoContext: React.Context<Partial<{
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}>> = createContext({})

export const TodoProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const todosMock = [
    { name: '掃除', dueDate: new Date('2021-07-14T00:00:00') },
    { name: '皿洗い', dueDate: new Date('2020-07-13T00:00:00') },
    { name: '犬を洗う', dueDate: new Date('2020-07-15T00:00:00') },
  ]
  const [todos, setTodos] = useState<Todo[]>(todosMock)
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
