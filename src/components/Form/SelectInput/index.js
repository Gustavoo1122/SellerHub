import styles from './SelectInput.module.css'

export default function SelectInput({name, text, options, value, handleOnChange}) {

    return (
        <div className={styles.selectInput}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} value={value} onChange={handleOnChange}>
                <option value="">Selecione</option>
                {options.map((option) => 
                    <option key={option.id} value={option.nome_categoria}>{option.nome_categoria}
                </option>)}
            </select>
        </div>
  )
}
