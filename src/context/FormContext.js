import {createContext, useState} from 'react'


const FormContext = createContext()

export const FormProvider = ({children}) => {

    const personalInfoInitialState = {
        name: '',
        address: '',
        phone: ''
    }

    const next = () => {
        if (step === 4) {
            setStep(1)
            setPersonalInfo(personalInfoInitialState)
            return
        }

        setStep(step + 1)
    }

    const [personalInfo, setPersonalInfo] = useState(personalInfoInitialState)

    const [step, setStep]  = useState(1)

    return (
        <FormContext.Provider
            value={{
                step: step,
                updateStep: setStep,
                next: next,

            }} 
        >
            {children}
        </FormContext.Provider>
    )

}

export default FormContext