import React from 'react'

export default function Button({text, onClick, className}) {
  return (
    <button onClick={onclick} className={className}>{text}</button>
  )
}
