import styles from './Card.module.css'
import {useState} from 'react'

function Card({children, outlined, selectable}) {
    const [selected, setSelected] = useState(false)

    const toggleSelected = () => {
        if(!selected){
            setSelected(true)
        } else { 
            setSelected(false)
        }
    } 
    
    const handleClick = () => {
        selectable && toggleSelected()
    }

    console.log(selected)

    return (
        <div 
        onClick={handleClick} 
        className={`${styles.card} 
        ${outlined ? styles.outline : ''}
        ${selected ? styles.selected : ''}
        `}
        >
            {children}
        </div>
    )
}

export default Card


