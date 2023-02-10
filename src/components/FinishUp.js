import {useContext} from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'

function FinishUp() {
    const formCTX = useContext(FormContext)

    const {next, plan, addOns, planCost, total} = formCTX

    const planTotal = planCost()
    console.log('from fishis', planTotal)


    return (
        <div>
            <h1>Finishing up</h1>
            <p>Double check everything looks OK before confirming.</p>
            <p>{`${plan.planChoice} ${plan.yearly ? '(Yearly)' : '(Monthly)' } `}</p>
            <p>{planTotal}</p>
            

            {addOns.onlineService ? <p>Online service</p> : ''}
            {addOns.onlineService && <p>{plan.yearly ? '$10/yr' : '$1/mo'}</p>}

            {addOns.largerStorage ? <p>Larger storage</p> : ''}
            {addOns.largerStorage && <p>{plan.yearly ? '$20/yr' : '$2/mo'}</p> }

            {addOns.customProfile ? <p>Custom profile</p> : ''}
            {addOns.customProfile && <p>{plan.yearly ? '$20/yr' : '$2/mo'}</p>}


            <p>Total (per month)</p>
            <p>{total}</p>

            <Button onClick={next}>Confirm</Button>
        </div>
    )
}

export default FinishUp


