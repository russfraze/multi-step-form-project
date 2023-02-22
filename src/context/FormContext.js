import { createContext, useState } from 'react'


const FormContext = createContext()

export const FormProvider = ({ children }) => {

    const personalInfoInitialState = {
        name: '',
        address: '',
        phone: ''
    }

    const planInitialState = {
        planChoice: null,
        yearly: false,
    }

    const plansInitialState = [
        {
            name: "Arcade",
            costMo: 9,
            costYr: 90,
            selected: false,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#FFAF7E" />
                    <path fill="#FFF" fill-rule="nonzero" d="M24.995 18.005h-3.998v5.998h-2v-5.998H15a1 1 0 0 0-1 1V29a1 1 0 0 0 1 1h9.995a1 1 0 0 0 1-1v-9.995a1 1 0 0 0-1-1Zm-5.997 8.996h-2v-1.999h2v2Zm2-11.175a2.999 2.999 0 1 0-2 0v2.18h2v-2.18Z" />
                </g></svg>
        },
        {
            name: "Advanced",
            costMo: 12,
            costYr: 120,
            selected: false,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#F9818E" />
                    <path fill="#FFF" fill-rule="nonzero" d="M25.057 15H14.944C12.212 15 10 17.03 10 19.885c0 2.857 2.212 4.936 4.944 4.936h10.113c2.733 0 4.943-2.08 4.943-4.936S27.79 15 25.057 15ZM17.5 20.388c0 .12-.108.237-.234.237h-1.552v1.569c0 .126-.138.217-.259.217H14.5c-.118 0-.213-.086-.213-.203v-1.583h-1.569c-.126 0-.217-.139-.217-.26v-.956c0-.117.086-.213.202-.213h1.584v-1.554c0-.125.082-.231.203-.231h.989c.12 0 .236.108.236.234v1.551h1.555c.125 0 .231.083.231.204v.988Zm5.347.393a.862.862 0 0 1-.869-.855c0-.472.39-.856.869-.856.481 0 .87.384.87.856 0 .471-.389.855-.87.855Zm1.9 1.866a.86.86 0 0 1-.87-.852.86.86 0 0 1 .87-.855c.48 0 .87.38.87.855a.86.86 0 0 1-.87.852Zm0-3.736a.862.862 0 0 1-.87-.854c0-.472.39-.856.87-.856s.87.384.87.856a.862.862 0 0 1-.87.854Zm1.899 1.87a.862.862 0 0 1-.868-.855c0-.472.389-.856.868-.856s.868.384.868.856a.862.862 0 0 1-.868.855Z" />
                </g></svg>
        },
        {
            name: "Pro",
            costMo: 15,
            costYr: 150,
            selected: false,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                <g fill="none" fill-rule="evenodd"><circle cx="20" cy="20" r="20" fill="#483EFF" />
                    <path fill="#FFF" fill-rule="nonzero" d="M26.666 13H13.334A3.333 3.333 0 0 0 10 16.333v7.193a3.447 3.447 0 0 0 2.14 3.24c1.238.5 2.656.182 3.56-.8L18.52 23h2.96l2.82 2.966a3.2 3.2 0 0 0 3.56.8 3.447 3.447 0 0 0 2.14-3.24v-7.193A3.333 3.333 0 0 0 26.666 13Zm-9.333 6H16v1.333a.667.667 0 0 1-1.333 0V19h-1.333a.667.667 0 0 1 0-1.334h1.333v-1.333a.667.667 0 1 1 1.333 0v1.333h1.333a.667.667 0 1 1 0 1.334Zm7.333 2a2.667 2.667 0 1 1 0-5.333 2.667 2.667 0 0 1 0 5.333ZM26 18.333a1.333 1.333 0 1 1-2.667 0 1.333 1.333 0 0 1 2.667 0Z" />
                </g></svg>
        }
    ]


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
    const [plans, setPlans] = useState(plansInitialState)
    const [addOns, setAddOns] = useState(addOnsInitialState)
    console.log('from context', personalInfo, plans, addOns)

    const [step, setStep] = useState(1)
    const next = () => {
        if (step === 5) {
            setStep(1)
            setPersonalInfo(personalInfoInitialState)
            return
        }

        setStep(step + 1)
    }

    const prev = () => setStep(step - 1)


    const planChoice = plans.filter((plan) => plan.selected === true)

    const getPlanTotal = () => {
        console.log('plan choince from context',planChoice)
        let planCost = 0
        console.log( 'pllllll',plan.yearly)
        if(plan.yearly){
            planCost = planChoice[0].costYr
        } else {
            planCost = planChoice[0].costMo
        }
        console.log('plan Cost baby', planCost)
        return planCost
    }

    



    // const getPlanTotal = () => {
    //     let planCost = ''
    //     switch (plan.planChoice, plan.yearly) {
    //         case plan.planChoice === 'arcade' && !plan.yearly:
    //             return planCost = '$9/mo'
    //         case plan.planChoice === 'arcade' && plan.yearly:
    //             return planCost = '$90/yr'
    //         case plan.planChoice === 'advanced' && !plan.yearly:
    //             return planCost = '$12/mo'
    //         case plan.planChoice === 'advanced' && plan.yearly:
    //             return planCost = '$120/yr'
    //         case plan.planChoice === 'pro' && !plan.yearly:
    //             return planCost = '$15/mo'
    //         case plan.planChoice === 'pro' && plan.yearly:
    //             return planCost = '$150/yr'
    //         default: return null


    //     }


    // }


    // const getPlanValue = () => {
    //     let planValue = 0

    //     switch (plan.planChoice, plan.yearly) {
    //         case plan.planChoice === 'arcade' && !plan.yearly:
    //             return planValue = 9
    //         case plan.planChoice === 'arcade' && plan.yearly:
    //             return planValue = 90
    //         case plan.planChoice === 'advanced' && !plan.yearly:
    //             return planValue = 12
    //         case plan.planChoice === 'advanced' && plan.yearly:
    //             return planValue = 120
    //         case plan.planChoice === 'pro' && !plan.yearly:
    //             return planValue = 15
    //         case plan.planChoice === 'pro' && plan.yearly:
    //             return planValue = 150
    //         default: return planValue


    //     }


    // }

    // console.log('plan value form conext', getPlanValue())
    // let x = getPlanValue()

    const getAddOnsTotal = () => {
        let total = 0

        if (addOns.onlineService) {
            plan.yearly ? total += 10 : total += 1
        }

        if (addOns.largerStorage) {
            plan.yearly ? total += 20 : total += 2
        }

        if (addOns.customProfile) {
            plan.yearly ? total += 20 : total += 2
        }


        return total

    }

    console.log('get add ons from COnt', getAddOnsTotal())


    
    



    return (
        <FormContext.Provider
            value={{
                step: step,
                updateStep: setStep,
                next: next,
                prev: prev,
                setPersonalInfo: setPersonalInfo,
                personalInfo: personalInfo,
                setPlan: setPlan,
                plan: plan,
                plansInitialState: plansInitialState,
                setPlans: setPlans,
                plans: plans,
                planChoice: planChoice,
                setAddOns: setAddOns,
                addOns: addOns,
                getPlanTotal: getPlanTotal,
                getAddOnsTotal: getAddOnsTotal,

            }}
        >
            {children}
        </FormContext.Provider>
    )

}

export default FormContext