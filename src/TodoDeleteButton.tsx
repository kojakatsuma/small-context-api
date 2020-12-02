import React, { useCallback } from 'react'
import { useTodos } from './TodoContext'

const useDeleteTodo = (index: number) => {
  const { todos, setTodos } = useTodos()
  return useCallback(() => {
    setTodos(todos.filter((_todo, i) => i !== index))
  }, [todos, setTodos, index])
}

export const TodoDeleteButton: React.FC<{ deleteTodoIndex: number }> = ({
  deleteTodoIndex,
}) => {
  const deleteTodo = useDeleteTodo(deleteTodoIndex)
  return <button onClick={deleteTodo}>削除</button>
}
