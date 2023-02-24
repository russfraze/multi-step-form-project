import {ReactComponent as CheckMark} from '../../assets/icon-checkmark.svg'
import {useState, useEffect} from 'react'
import styles from '../UI/Checkbox.module.css'
import React from 'react'

const Checkbox = ({setChecked, checked, onCheck}) => {
    

    // useEffect(() => {
    //     setBool(checked)
    // },[checked])

    // const handleSubmit = (e) => {
    //     // e.preventDefault()
    //     setChecked(!checked)
        
    // } 

    const checkBoxStyles = `${styles.checkbox} ${checked ? styles.boxChecked : ''}`
    return (
        <div className={checkBoxStyles}>
            <CheckMark onClick={onCheck}/>
        </div>
    )
}

export default Checkbox
