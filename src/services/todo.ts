import db from '@utils/db'

export const getTodoList = async () => {
  const todos = await db.todo.findMany()

  return todos
}
