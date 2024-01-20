import { Button } from '@components'

export const Home = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-semibold text-center">Todo App</h1>
      <p className="text-center">A simple todo app</p>

      <div className="flex flex-col gap-3 mt-5">
        <input
          type="text"
          placeholder="Search your task"
          className="border-black/40 border rounded-md p-2 outline-none"
        />

        <Button />
      </div>
    </div>
  )
}

export default Home
