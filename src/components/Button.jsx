import React from 'react'

const Button = ({ children }) => {
  return (
    <button className="rounded-full group hover:ring-1 hover:ring-primary px-8 py-2 border flex items-center space-x-2  border-primary bg-transparent">
      {children}
    </button>
  )
}

export default Button