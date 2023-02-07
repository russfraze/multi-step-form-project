import {ReactComponent as CheckMark} from '../../assets/icon-checkmark.svg'
import {useState, useEffect} from 'react'
import styles from '../UI/Checkbox.module.css'
import React from 'react'




const Checkbox = ({setBool}) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        setBool(checked)
    },[checked])

    const handleSubmit = (e) => {
        e.preventDefault()
        setChecked(!checked)
        
    } 

    const checkBoxStyles = `${styles.checkbox} ${checked ? styles.boxChecked : ''}`
    return (
        <div className={checkBoxStyles}>
            <CheckMark onClick={handleSubmit}/>
        </div>
    )
}

export default Checkbox
