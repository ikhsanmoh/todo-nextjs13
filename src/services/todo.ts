'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
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

  if (!!!todo) {
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

export const createTodo = async (formValues: FormData) => {
  const todo = await db.todo.create({
    data: {
      title: formValues.get('title') as string,
    },
  })

  if (!!!todo) {
    throw new Error('Failed to create todo')
  }

  revalidatePath('/')
  redirect('/')
}
