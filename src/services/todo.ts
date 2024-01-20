'use server'
import { revalidatePath } from 'next/cache'
import db from '@utils/db'

export const getTodoList = async () => {
  const todos = await db.todo.findMany()

  return todos
}

export const toggleTodo = async (id: string) => {
  const todo = await db.todo.findUnique({
    where: {
      id,
    },
  })

  if (!todo) {
    throw new Error('Todo not found')
  }

  const updatedTodo = await db.todo.update({
    where: {
      id,
    },
    data: {
      done: !todo.done,
    },
  })

  revalidatePath('/')
  return updatedTodo
}
