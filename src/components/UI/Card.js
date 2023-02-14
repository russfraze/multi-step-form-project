import styles from './Card.module.css'
import {useState, useContext, useEffect} from 'react'
import FormContext from '../../context/FormContext'

function Card({children, outlined, selectable, id, shadow}) {
    const [selected, setSelected] = useState(false)
    const formCXT = useContext(FormContext)

    const {setPlan} = formCXT

    const planId = id

    const toggleSelected = () => {
        if(!selected){
            setSelected(true)
        } else { 
            setSelected(false)
        }
    } 
    
    const handleClick = () => {
        // console.log('in handle click',planId)
        selectable && toggleSelected()
        
    }

    useEffect(() => {
        setPlan((prevState) => ({
            ...prevState,
            planChoice: planId
        }))
    },[selected])

    return (
        <div 
        onClick={handleClick} 
        className={`${styles.card} 
        ${outlined ? styles.outline : ''}
        ${selected ? styles.selected : ''}
        ${shadow ? styles.dropShadow : ''}
        `}
        >
            {children}
        </div>
    )
}

export default Card


