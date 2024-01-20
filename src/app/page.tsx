import { TodoItem } from '@components'

// Server Actions
import { getTodoList } from '@services/todo'

export const Home = async () => {
  const todos = await getTodoList()

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-center">Todo App</h1>
      <p className="text-center">A simple todo app</p>

      <div className="flex flex-col gap-3 mt-5">
        <input
          type="text"
          placeholder="Search your task"
          className="border-black/40 border rounded-md p-2 outline-none"
        />
      </div>

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

export default Home
