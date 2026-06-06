import React from 'react'
import styles from './Input.module.css'

export default function Input({type, text, name, placeholder, handleOnChange, value, className}) {
  return (
    <div className={styles.form}>
        <label htmlFor={name}>{text}:</label>
        <input type={type} 
               name={name} 
               value={value} 
               id={name}
               placeholder={placeholder} 
               onChange={handleOnChange} 
               className={className}/>
    </div>
  )
}
