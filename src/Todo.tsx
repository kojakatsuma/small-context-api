import React, { useState } from 'react'

export const Todo: React.FC<{ name: string; dueDate: Date }> = ({
  name,
  dueDate,
}) => {
  const [isCheck, check] = useState(false)
  const expired = Date.now() > dueDate.getTime()
  return (
    <div style={{ color: expired ? 'red' : 'black' }}>
      <input
        type="checkbox"
        id={name}
        onChange={(e) => check(e.target.checked)}
      />
      <label htmlFor={name}>
        <span style={{ textDecorationLine: isCheck ? 'line-through' : 'none' }}>
          {name} {dueDate.toLocaleString()}
        </span>
      </label>
    </div>
  )
}
