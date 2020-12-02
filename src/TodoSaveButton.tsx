import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { loadTodos } from './reducer'
import { useTodos } from './TodoContext'

const useSaveTodo = () => {
  const { todos } = useTodos()
  const dispatch = useDispatch()
  return useCallback(() => {
    dispatch(
      loadTodos(
        todos.map((todo) => ({
          ...todo,
          dueDate: todo.dueDate.toLocaleString(),
        })),
      ),
    )
  }, [todos, dispatch])
}

export const TodoSaveButton = () => {
  const saveTodos = useSaveTodo()
  return (
    <div style={{ marginTop: 50 }}>
      <button style={{ color: 'blue' }} onClick={saveTodos}>
        変更を保存する
      </button>
    </div>
  )
}
