// Components
import { TodoList } from '@components'

export const Home = async () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold text-center">Todo App</h1>
      <p className="text-center">A simple todo app</p>

      <TodoList containerStyle="mt-5" />
    </div>
  )
}

export default Home
