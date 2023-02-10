import {useState, useContext} from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import SelectPlanForm from './SelectPlanForm'
import PickAddForm from './PickAddForm'
import FinishUp from './FinishUp'
import FormContext from '../context/FormContext'
import ThankYou from './ThankYou'

function MultiStepForm() {

    const formCXT = useContext(FormContext)

    const {step} = formCXT
    
    return (
        <div>
            {step === 1 && <PersonalInfoForm /> || 
            step === 2 && <SelectPlanForm/>  || 
            step === 3 && <PickAddForm />  ||
            step === 4 && <FinishUp /> ||
            step === 5 && <ThankYou />
            }
           
        </div>
    )
}

export default MultiStepForm
