import {ReactComponent as CheckMark} from '../../assets/icon-checkmark.svg'
import {useState} from 'react'
import styles from '../UI/Checkbox.module.css'



function Checkbox() {
    const [checked, setChecked] = useState(false)

    const checkBoxStyles = `${styles.checkbox} ${checked ? styles.boxChecked : ''}`
    return (
        <div className={checkBoxStyles}>
            <CheckMark onClick={() => setChecked(!checked)}/>
        </div>
    )
}

export default Checkbox
