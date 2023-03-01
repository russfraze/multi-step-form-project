import styles from './Card.module.css'
import { useContext } from 'react'
import FormContext from '../../context/FormContext'

function Card({ children, outlined, selectable, id, index, shadow, selected, addOn }) {

    const formCXT = useContext(FormContext)
    const { setPlans, plansInitialState } = formCXT

    const handleClick = () => {
        if (selectable) {
            let newPlansData = [...plansInitialState]
            newPlansData[index] = { ...newPlansData[index], selected: !newPlansData[index].selected }
            setPlans(newPlansData)
        }
    }



    return (
        <div onClick={handleClick}
            className={`
        ${styles.card} 
        ${selected ? styles.selected : ''} 
        ${outlined ? styles.outline : ''} 
        ${selectable ? styles.clickable : ''}
        ${addOn ? styles.addOn : ''}
        `}>


            {children}
        </div>
    )
}

export default Card


