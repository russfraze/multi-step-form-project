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

                <div className={styles.reviewPanel}>
                    <p>{`${chosenPlan} ${plan.yearly ? '(Yearly)' : '(Monthly)'} `}</p>
                    <p>{planTotal}</p>

                    
                    {addOns[0].selected ? <p>Online service</p> : ''}
                    {addOns[0].selected && <p>{plan.yearly ? '$10/yr' : '$1/mo'}</p>}

                    {addOns[1].selected ? <p>Larger storage</p> : ''}
                    {addOns[1].selected && <p>{plan.yearly ? '$20/yr' : '$2/mo'}</p>}

                    {addOns[2].selected ? <p>Custom profile</p> : ''}
                    {addOns[2].selected && <p>{plan.yearly ? '$20/yr' : '$2/mo'}</p>}
                </div>

                <p>Total (per month)</p>
                <p>{monthlyTotal}</p>
            </Card>
            <div className={styles.navBar}>
                <Button onClick={next}>Confirm</Button>
            </div>
        </div>
    )
}

export default FinishUp


