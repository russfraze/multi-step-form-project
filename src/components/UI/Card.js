import styles from './Card.module.css'
import { useState, useContext, useEffect } from 'react'
import FormContext from '../../context/FormContext'

function Card({ children, outlined, selectable, id, index, shadow, selected }) {
    
    const formCXT = useContext(FormContext)
    const { setPlans, plans, plansInitialState } = formCXT


    // plans.forEach((plan) => {
    //     if(plan.name != id){
    //         console.log('nuts',plan.name)
    //     }
    // })
    

    const handleClick = () => {

        
        if(selectable){


            let newPlansData = [...plansInitialState]
            newPlansData[index] = {...newPlansData[index], selected: !newPlansData[index].selected}
            // newPlansData[!index] = {...!newPlansData[index], selected: false}
            
            setPlans(newPlansData)
        }
       
    }

 

    return (
        <div onClick={handleClick}
        className={`${styles.card} ${selected ? styles.selected : ''}`}>
             
       
            {children}
        </div>
    )
}

export default Card


