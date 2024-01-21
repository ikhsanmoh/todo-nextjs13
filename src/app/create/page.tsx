import Link from 'next/link'

// Server Actions
import { createTodo } from '@services/todo'

// Components
import { Button } from '@components'

const CreateTodoPage = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0">
          <Link href="/">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black/60 hover:text-black/80"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </Link>
        </div>

        <h1 className="text-3xl font-semibold text-center">Todo App</h1>
        <p className="text-center">Create Form</p>
      </div>

      <div className="flex flex-col mt-5">
        <form action={createTodo} className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            className="border-black/40 border rounded-md p-2 outline-none"
            required
          />

          <div className="flex flex-col mt-3">
            <Button label="Create" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTodoPage
