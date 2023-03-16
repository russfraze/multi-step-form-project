import styles from './Steps.module.css'
import FormContext from '../context/FormContext'
import { useContext } from 'react'

function Steps() {
    const formCXT = useContext(FormContext)

    const { step } = formCXT

    return (
        <nav className={styles.steps}>
            <div className={styles.stepGroup}>
                <div className={`${styles.step} ${step === 1 ? styles.selected : ''}`}>1</div>
                <div className={styles.stepText}>
                    <p>STEP 1</p>
                    <h2>YOUR INFO</h2>
                </div>
            </div>
            <div className={styles.stepGroup}>
                <div className={`${styles.step} ${step === 2 ? styles.selected : ''}`}>2</div>
                <div className={styles.stepText}>
                    <p>STEP 2</p>
                    <h2>SELECT PLAN</h2>
                </div>
            </div>
            <div className={styles.stepGroup}>
                <div className={`${styles.step} ${step === 3 ? styles.selected : ''}`}>3</div>
                <div className={styles.stepText}>
                    <p>STEP 3</p>
                    <h2>ADD-ONS</h2>
                </div>
            </div>
            <div className={styles.stepGroup}>
                <div className={`${styles.step} ${step === 4 || step === 5 ? styles.selected : ''}`}>4</div>
                <div className={styles.stepText}>
                    <p>STEP 4</p>
                    <h2>SUMMARY</h2>
                </div>
            </div>
        </nav>
    )
}

export default Steps


