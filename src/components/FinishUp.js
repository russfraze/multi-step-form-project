import { useContext } from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './FinishUp.module.css'

function FinishUp() {
    const formCTX = useContext(FormContext)

    const { next, plan, addOns, planChoice, getPlanTotal, getAddOnsTotal } = formCTX
    const chosenPlan = planChoice[0].name
    const planTotal = getPlanTotal()
    const addOnsTotal = getAddOnsTotal()
    const monthlyTotal = planTotal + addOnsTotal

    return (
        <div>
            <Card shadow={true}>
                <h1>Finishing up</h1>
                <p>Double check everything looks OK before confirming.</p>

                <div className={styles.summary}>
                    <div className={styles.summaryPanel}>
                        <div className={styles.textGroup}>
                            <div>
                                <h2>{`${chosenPlan} ${plan.yearly ? '(Yearly)' : '(Monthly)'} `}</h2>
                                <p>Change</p>
                            </div>
                            <h2>{`$${planTotal}${plan.yearly ? '/yr' : '/mo'}`}</h2>

                        </div>

                        <div className={styles.dividerLine}></div>

                        <div className={styles.textGroup}>
                            {addOns[0].selected ? <p>Online service</p> : ''}
                            {addOns[0].selected && <p>{plan.yearly ? '+$10/yr' : '$1/mo'}</p>}
                        </div>
                        <div className={styles.textGroup}>
                            {addOns[1].selected ? <p>Larger storage</p> : ''}
                            {addOns[1].selected && <p>{plan.yearly ? '+$20/yr' : '$2/mo'}</p>}
                        </div>
                        <div className={styles.textGroup}>
                            {addOns[2].selected ? <p>Custom profile</p> : ''}
                            {addOns[2].selected && <p>{plan.yearly ? '+$20/yr' : '$2/mo'}</p>}
                        </div>
                    </div>

                    <div className={`${styles.textGroup} ${styles.total}`}>
                        <p>Total (per month)</p>
                        <p className={styles.totalCost}>{`$${monthlyTotal}${plan.yearly ? '/yr' : '/mo'}`} </p>
                    </div>
                </div>

            </Card>
            <div className={styles.navBar}>
                <Button onClick={next}>Confirm</Button>
            </div>
        </div>
    )
}

export default FinishUp


