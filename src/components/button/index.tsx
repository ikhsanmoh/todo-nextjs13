'use client'
// Types
import type { FC } from 'react'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string
  containerStyle?: string
}
export const Button: FC<ButtonProps> = (props) => {
  const { label, containerStyle } = props

  return (
    <div className={containerStyle}>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        {...props}
      >
        {label}
      </button>
    </div>
  )
}
