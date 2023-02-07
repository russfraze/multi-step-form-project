import {createContext, useState} from 'react'


const FormContext = createContext()

export const FormProvider = ({children}) => {

    const personalInfoInitialState = {
        name: '',
        address: '',
        phone: ''
    }

    const planInitialState = {
        monthly: true
    }

    const addOnsInitialState = {
        onlineService: false,
        largerStorage: false,
        customProfile: false
    }

    const [personalInfo, setPersonalInfo] = useState(personalInfoInitialState)
    const [plan, setPlan] = useState(planInitialState)
    const [addOns, setAddOns] = useState(addOnsInitialState)
    console.log('from context',personalInfo)
  
    const next = () => {
        if (step === 4) {
            setStep(1)
            setPersonalInfo(personalInfoInitialState)
            return
        }

        setStep(step + 1)
    }

    const [step, setStep]  = useState(1)

    return (
        <FormContext.Provider
            value={{
                step: step,
                updateStep: setStep,
                next: next,
                setPersonalInfo: setPersonalInfo,
                setPlan: setPlan,
                setAddOns: setAddOns,

            }} 
        >
            {children}
        </FormContext.Provider>
    )

}

export default FormContext