// Components
import { SearchTodoForm, TodoItem } from '@components'

// Server Actions
import { getTodoList } from '@services/todo'

// Types
import type { FC } from 'react'

interface TodoListProps {
  containerStyle?: string
  q?: string
}

export const TodoList: FC<TodoListProps> = async (props) => {
  const { containerStyle, q = '' } = props

  const todos = await getTodoList({ q })

  return (
    <div className={containerStyle}>
      <SearchTodoForm />

      <div className="mt-5 border-b border-dashed border-black/10"></div>

      <div className="mt-5">
        <h2 className="text-xl font-semibold text-center">Your Task</h2>
        <p className="text-sm text-gray-500 text-center">
          You have {todos.length} tasks
        </p>

        <div className="mt-5">
          {todos.map((todo) => (
            <TodoItem key={todo.id} data={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}
