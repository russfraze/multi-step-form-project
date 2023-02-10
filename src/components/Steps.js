import styles from './Steps.module.css'
import FormContext from '../context/FormContext'
import {useContext} from 'react'

function Steps() {
    const formCXT = useContext(FormContext)

    const {step} = formCXT

    return (
        <div className={styles.steps}>
            <div className={`${styles.step} ${step === 1 ? styles.selected : ''}`}>1</div>
            <div className={`${styles.step} ${step === 2 ? styles.selected : ''}`}>2</div>
            <div className={`${styles.step} ${step === 3 ? styles.selected : ''}`}>3</div>
            <div className={`${styles.step} ${step === 4 || step === 5 ? styles.selected : ''}`}>4</div>
        </div>
    )
}

export default Steps


