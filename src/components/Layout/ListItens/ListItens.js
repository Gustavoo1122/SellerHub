import styles from './ListItens.module.css'
import Button from '../Button'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { getCategoryColor } from '../../../utils/categoryColors.js'
import Stock from './Stock/Stock.js';
import Barcode from './Barcode/Barcode.js';
import Price from './Price/Price.js';
import { Link } from 'react-router-dom';

export default function ListItens({id, sku, categoria, quantidade, nome_produto, preco_custo, preco_venda, handleRemove}) {
  return (
            <li key={id} className={styles.itemList} style={{borderLeft: `6px solid ${getCategoryColor(categoria)}`}}>
              <div className={styles.itemInfo}>
                <div className={styles.headerInfo}>
                    <div>
                      <p className={styles.itemName}>{nome_produto}</p>
                      <p className={styles.categories} style={{backgroundColor: getCategoryColor(categoria)}}>{categoria}</p>
                    </div>
                    
                    <div className={styles.itemButtons}>
                        <Link to="/" className={styles.editButton}><FaEdit className={styles.iconEditButton} /></Link>
                        <Button onClick ={() => handleRemove(id)} text={<MdDelete className={styles.iconDeleteButton} />} className={styles.deleteButton} /> 
                    </div>
                </div>
                <div className={styles.bodyInfo}>
                    <Barcode product={sku} />
                    <Stock quantidade={quantidade} />
                    <Price preco_custo={preco_custo} quantidade={quantidade}/>
                </div>  
              </div>   
            </li>
  )
}