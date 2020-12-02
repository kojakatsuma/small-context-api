import React, { useCallback, useState } from 'react'
import { Todo } from './Todo'
import { TodoDeleteButton } from './TodoDeleteButton'
import { TodoForm } from './TodoForm'

const useTodos = () => {
  const todosMock = [
    { name: '掃除', dueDate: new Date('2021-07-14T00:00:00') },
    { name: '皿洗い', dueDate: new Date('2020-07-13T00:00:00') },
    { name: '犬を洗う', dueDate: new Date('2020-07-15T00:00:00') },
  ]
  const [todos, setTodos] = useState(todosMock)

  const createTodo = useCallback(
    (name: string, dueDate: string) => {
      setTodos(todos.concat({ name, dueDate: new Date(dueDate) }))
    },
    [todos],
  )

  const deleteTodo = useCallback(
    (deleteIndex: number) => () => {
      setTodos(todos.filter((_todo, i) => i !== deleteIndex))
    },
    [todos],
  )
  return { todos, createTodo, deleteTodo }
}

export const TodoList = () => {
  const { todos, createTodo, deleteTodo } = useTodos()

  return (
    <>
      <h2>TODO一覧</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo name={todo.name} dueDate={todo.dueDate} />
          <TodoDeleteButton deleteTodo={deleteTodo(index)} />
        </div>
      ))}
      <TodoForm createTodo={createTodo} />
    </>
  )
}
