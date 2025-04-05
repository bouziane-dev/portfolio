import React from 'react'

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`from-blue via-purple to-violet animate-gradient rounded-full bg-gradient-to-r bg-[length:200%] px-9 py-5 text-sm font-semibold text-white transition-all duration-300 hover:drop-shadow-[0_0_5px_#6978D1] ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
