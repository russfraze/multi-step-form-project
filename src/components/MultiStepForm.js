import {useState, useContext} from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import SelectPlanForm from './SelectPlanForm'
import PickAddons from './PickAddons'
import FinishUp from './FinishUp'
import FormContext from '../context/FormContext'

function MultiStepForm() {

    const formCXT = useContext(FormContext)

    const {step} = formCXT
    
    return (
        <div>
            {step === 1 && <PersonalInfoForm /> || 
            step === 2 && <SelectPlanForm/>  || 
            step === 3 && <PickAddons />  ||
            step === 4 && <FinishUp />
            }
           
        </div>
    )
}

export default MultiStepForm
