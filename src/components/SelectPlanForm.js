import { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import PlanList from './PlanList'
import Switch from "react-switch"
import styles from './SelectPlanForm.module.css'
import { ReactComponent as SidebarDesktop } from '../assets/bg-sidebar-desktop.svg'


function SelectPlanForm() {
    const formCXT = useContext(FormContext)
    const { next, prev, setPlan, getPlanTotal } = formCXT


    const [checked, setChecked] = useState(false)

    const handleChange = () => {

        if (!checked) {
            setChecked(true)
        }
        if (checked) {
            setChecked(false)
        }
    }

    const handleSubmit = () => {
        setPlan((prevState) => ({
            ...prevState,
            yearly: checked,
        }))
        getPlanTotal()
        next()
    }

    return (
        <div className={styles.selectContainer}>
            
            <Card shadow={true}>
                <div className={styles.selectPlan}>
                    <div className={styles.stepsNav}>
                        <SidebarDesktop />
                    </div>
                    <div className={styles.planListData}>
                        <div>
                            <h1>Select your plan</h1>
                            <p>You have the option of monthly or yearly billing.</p>
                        </div>


                        <PlanList yearly={checked} />


                        <div className={styles.switchCard}>
                            <h2>Monthly</h2>
                            <label>
                                <Switch
                                    onChange={handleChange}
                                    checked={checked}
                                    onColor={'#02295a'}
                                    offColor={'#02295a'}
                                    checkedIcon={false}
                                    uncheckedIcon={false}

                                    handleDiameter={14}
                                />
                            </label>
                            <h2>Yearly</h2>
                        </div>
                    </div>
                </div>

            </Card>

            <div className={styles.navBar}>
                <p onClick={prev}>Go Back</p> <Button onClick={handleSubmit}>Next Step</Button>
            </div>

        </div>
    )
}

export default SelectPlanForm
