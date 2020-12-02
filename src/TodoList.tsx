import React from 'react'
import { Todo } from './Todo'
import { useTodos } from './TodoContext'
import { TodoDeleteButton } from './TodoDeleteButton'
import { TodoForm } from './TodoForm'

export const TodoList = () => {
  const { todos } = useTodos()

  return (
    <>
      <h2>TODO一覧</h2>
      {todos.map((todo, index) => (
        <div key={index}>
          <Todo name={todo.name} dueDate={todo.dueDate} />
          <TodoDeleteButton deleteTodoIndex={index} />
        </div>
      ))}
      <TodoForm />
    </>
  )
}
