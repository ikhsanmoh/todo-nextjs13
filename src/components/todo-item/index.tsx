'use client'

// Server Actions
import { toggleTodo } from '@services/todo'

// Types
import type { FC } from 'react'
import type { Todo } from '@prisma/client'

interface TodoItemProps {
  data: Todo
}

export const TodoItem: FC<TodoItemProps> = (props) => {
  const { data } = props

  return (
    <div className="flex items-center justify-between gap-3 border-b border-black/10 py-3">
      <p className={`text-xl ${data.done ? 'line-through' : ''}`}>
        {data.title}
      </p>

      <input
        type="checkbox"
        defaultChecked={data.done}
        onChange={() => toggleTodo(data.id)}
      />
    </div>
  )
}
