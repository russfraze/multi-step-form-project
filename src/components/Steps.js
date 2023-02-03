import styles from './Steps.module.css'

function Steps() {
    return (
        <div className={styles.steps}>
            <div className={styles.step}>1</div>
            <div className={styles.step}>2</div>
            <div className={styles.step}>3</div>
            <div className={styles.step}>4</div>
        </div>
    )
}

export default Steps
