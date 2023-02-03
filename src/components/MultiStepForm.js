import {useState, useContext} from 'react'
import PersonalInfoForm from './PersonalInfoForm'
import SelectPlanForm from './SelectPlanForm'
import FormContext from '../context/FormContext'

function MultiStepForm() {

    const formCXT = useContext(FormContext)

   
    
    return (
        <div>
            {formCXT.step ? <PersonalInfoForm /> : <SelectPlanForm />}
           
        </div>
    )
}

export default MultiStepForm
