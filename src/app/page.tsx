import { NextPage } from 'next'
import Link from 'next/link'

// Components
import { Button, TodoList } from '@components'

// Types
import { PageProps } from '../../.next/types/app/page'

const Home: NextPage<PageProps> = async ({ searchParams }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">Todo App</h1>
      <p className="text-center">A simple todo app</p>

      <div className="flex flex-col mt-5">
        <Link href="/create">
          <Button label="Create Task" />
        </Link>
      </div>

      <TodoList containerStyle="mt-3" q={searchParams?.q} />
    </div>
  )
}

export default Home
