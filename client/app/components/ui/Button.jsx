import React from 'react'

const Button = ({ text, onClick, className }) => {
  return (
    <button
      className={`animate-gradient rounded-full bg-gradient-to-r from-[#13ADC7] via-[#6978D1] to-[#945DD6] bg-[length:200%] px-9 py-5 text-sm font-semibold text-white transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
