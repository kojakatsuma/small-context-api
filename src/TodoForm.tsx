import React, { ChangeEvent, useCallback, useState } from 'react'
import { useTodos } from './TodoContext'

const useCreateTodo = () => {
  const { todos, setTodos } = useTodos()
  return useCallback(
    (name: string, dueDate: string) => {
      setTodos(todos.concat({ name, dueDate: new Date(dueDate) }))
    },
    [todos, setTodos],
  )
}

export const TodoForm: React.FC<{}> = () => {
  const [name, setName] = useState('')
  const [dueDate, setDueDate] = useState('')
  const createTodo = useCreateTodo()
  const changeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const changeDueDate = (e: ChangeEvent<HTMLInputElement>) =>
    setDueDate(e.target.value)
  return (
    <>
      <h2>TODO入力フォーム</h2>
      <div>
        <input value={name} onChange={changeName} />
      </div>
      <div>
        <input value={dueDate} type="datetime-local" onChange={changeDueDate} />
      </div>
      <button onClick={() => createTodo(name, dueDate)}>作成</button>
    </>
  )
}
