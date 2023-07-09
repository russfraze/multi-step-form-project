import {ReactComponent as CheckMark} from '../../assets/icon-checkmark.svg'
import styles from '../UI/Checkbox.module.css'
import React from 'react'

const Checkbox = ({setChecked, checked, onCheck}) => {
    const checkBoxStyles = `${styles.checkbox} ${checked ? styles.boxChecked : ''}`
    return (
        <div className={checkBoxStyles} onClick={onCheck}>
            <CheckMark />
        </div>
    )
}

export default Checkbox
