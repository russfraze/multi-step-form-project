import {createContext, useState} from 'react'


const FormContext = createContext()

export const FormProvider = ({children}) => {

    const personalInfoInitialState = {
        name: '',
        address: '',
        phone: ''
    }

    const [personalInfo, setPersonalInfo] = useState(personalInfoInitialState)

    const [step, setStep]  = useState(1)

    return (
        <FormContext.Provider
            value={{
                step: step,
                updateStep: setStep,

            }} 
        >
            {children}
        </FormContext.Provider>
    )

}

export default FormContext