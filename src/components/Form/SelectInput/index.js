import React, { useState } from 'react'
import styles from './SelectInput.module.css'

export default function SelectInput({name, text}) {
    const [categoria, setCategoria] = useState('');

    return (
        <div className={styles.selectInput}>
            <label htmlFor={name}>{text}:</label>
            <select name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option value="">Selecione</option>
                <option value="Decoração">Decoração</option>
                <option value="Utilidades">Utilidades</option>
                <option value="Cozinha">Cozinha</option>
                <option value="Organização">Organização</option>
                <option value="Banheiro">Banheiro</option>
                <option value="Quarto">Quarto</option>
                <option value="Jardim">Jardim</option>
                <option value="Iluminação">Iluminação</option>
                <option value="Presentes">Presentes</option>
                <option value="Outros">Outros</option>
            </select>
        </div>
  )
}
