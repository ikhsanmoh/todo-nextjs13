'use client'

import { useRouter } from 'next/navigation'

// Types
import type { FC } from 'react'

interface SearchTodoFormProps {
  containerStyle?: string
}

export const SearchTodoForm: FC<SearchTodoFormProps> = (props) => {
  const { containerStyle } = props
  const router = useRouter()

  const onSubmit = (formData: FormData) => {
    const search = formData.get('search')

    if (search) {
      router.push(`/?q=${search}`)
      return
    }

    router.push('/')
  }

  return (
    <div className={`flex flex-col gap-3 ${containerStyle}`}>
      <form className="flex flex-col" action={onSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search your task"
          className="border-black/40 border rounded-md p-2 outline-none"
        />
      </form>
    </div>
  )
}
