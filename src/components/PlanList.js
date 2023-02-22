import {useContext} from 'react'
import PlanItem from './PlanItem'
import FormContext from '../context/FormContext'


function PlanList({yearly}) {
    const formCXT = useContext(FormContext)
    const {plans} = formCXT

    return (
        <div>
            {plans.map((plan, index) => 
                <PlanItem 
                icon={plan.icon} 
                name={plan.name} 
                id={plan.name} 
                key={plan.name}
                index={index}
                costMo={plan.costMo} 
                costYr={plan.costYr} 
                yearly={yearly} 
                selected={plan.selected}
                />
            )}
        </div>
    )
}

export default PlanList
