import {createContext, useState} from 'react'


const FormContext = createContext()

export const FormProvider = ({children}) => {

    const personalInfoInitialState = {
        name: '',
        address: '',
        phone: ''
    }

    const planInitialState = {
        planChoice: null,
        yearly: false,
        arcadeMoCost: 9,
        arcadeYrCost: 90,
        advancedMoCost: 12,
        advancedYrCost: 120,
        proMoCost: 15,
        proYrCost: 150,

    }

    
    const addOnsInitialState = [
        {
            name: 'onlineService',
            priceMo: 1,
            priceYr: 10,
            selected: false,
        },
        {
            name: 'largerStorage',
            priceMo: 2,
            priceYr: 20,
            selected: false,
        },
        {
            name: 'customProfile',
            priceMo: 2,
            priceYr: 20,
            selected: false,
        },
    ]



    const [personalInfo, setPersonalInfo] = useState(personalInfoInitialState)
    const [plan, setPlan] = useState(planInitialState)
    const [addOns, setAddOns] = useState(addOnsInitialState)
    console.log('from context',personalInfo, plan, addOns)
  
    const [step, setStep]  = useState(1)
    const next = () => {
        if (step === 4) {
            setStep(1)
            setPersonalInfo(personalInfoInitialState)
            return
        }

        setStep(step + 1)
    }

    

    const getPlanTotal = () => {
        let planCost = ''
        switch(plan.planChoice, plan.yearly){
            case plan.planChoice === 'arcade' && !plan.yearly:
                return planCost = '$9/mo'
            case plan.planChoice === 'arcade' && plan.yearly:
                return planCost = '$90/yr'
            case plan.planChoice === 'advanced' && !plan.yearly:
                return planCost = '$12/mo'
            case plan.planChoice === 'advanced' && plan.yearly:
                return planCost = '$120/yr'
            case plan.planChoice === 'pro' && !plan.yearly:
                return planCost = '$15/mo'
            case plan.planChoice === 'pro' && plan.yearly:
                return planCost = '$150/yr'
            default: return null
            

        }
           
        return planCost
    }

    const totalPerMonth = () => {
        let planTotal = 0
        let addOnsTotal = 0
        let monthlyTotal = 0

        if(!plan.yearly && plan.planChoice === 'arcade'){
            planTotal += 9
        }
        if(plan.yearly && plan.planChoice === 'arcade'){
            planTotal += 90
        }
        if(!plan.yearly && plan.planChoice === 'advanced'){
            planTotal += 12
        }
        if(plan.yearly && plan.planChoice === 'advanced'){
            planTotal += 120
        }
        if(!plan.yearly && plan.planChoice === 'pro'){
            planTotal += 15
        }
        if(plan.yearly && plan.planChoice === 'pro'){
            planTotal += 150
        }

        if(addOns.onlineService){
            plan.yearly ? planTotal += 10 : planTotal += 1
        }

        if(addOns.largerStorage){
            plan.yearly ? planTotal += 120 : planTotal += 12
        }

        if(addOns.customProfile){
            plan.yearly ? planTotal += 150 : planTotal += 15
        }

        
            
        return planTotal        
        
    }

    console.log('from context this is total', totalPerMonth())


    const getPlanValue = () => {
        let planValue = 0

        switch(plan.planChoice, plan.yearly){
            case plan.planChoice === 'arcade' && !plan.yearly:
                return planValue = 9
            case plan.planChoice === 'arcade' && plan.yearly:
                return planValue = 90
            case plan.planChoice === 'advanced' && !plan.yearly:
                return planValue = 12
            case plan.planChoice === 'advanced' && plan.yearly:
                return planValue = 120
            case plan.planChoice === 'pro' && !plan.yearly:
                return planValue = 15
            case plan.planChoice === 'pro' && plan.yearly:
                return planValue = 150
            default: return planValue
            

        }

    
    }

    console.log('plan value form conext', getPlanValue())

    const getAddOnsTotal = () => {
        let total = 0

        if(addOns.onlineService){
            plan.yearly ? total += 10 : total += 1
        } 

        if(addOns.largerStorage){
            plan.yearly ? total += 20 : total += 2
        } 
        
        if(addOns.customProfile){
            plan.yearly ? total += 20 : total += 2
        } 
        

       return total

    }

    console.log('get add ons from COnt',  getAddOnsTotal())





    
    

    return (
        <FormContext.Provider
            value={{
                step: step,
                updateStep: setStep,
                next: next,
                setPersonalInfo: setPersonalInfo,
                personalInfo: personalInfo,
                setPlan: setPlan,
                plan: plan,
                setAddOns: setAddOns,
                addOns: addOns,
                planCost: getPlanTotal,
                addOnsCost: getAddOnsTotal,

            }} 
        >
            {children}
        </FormContext.Provider>
    )

}

export default FormContext