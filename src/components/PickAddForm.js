import { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PickAddForm.module.css'
import Checkbox from '../components/UI/Checkbox'


function PickAddForm() {
    const formCTX = useContext(FormContext)

    const { next, prev, setAddOns, plan } = formCTX


    const [onlineService, setOnlineService] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [customProfile, setCustomProfile] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        setAddOns({
            onlineService: onlineService,
            largerStorage: largerStorage,
            customProfile: customProfile
        })
        next()
    }
    console.log(onlineService)
    
    return (
        <div>
            <Card shadow={true}>
                <h1>Pick add ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>


                <div className={styles.addOn}>
                    <Checkbox setBool={setOnlineService} />
                    <div>
                        <h2>Online service</h2>
                        <p>Access to multiplayer games</p>
                    </div>
                    {plan.yearly ? <p>+$10/yr</p> : <p>+$1/mo</p>}
                </div>
                <div className={styles.addOn}>
                    <Checkbox setBool={setLargerStorage} />
                    <div>
                        <h2>Larger storage</h2>
                        <p>Extra 1TB of cloud save</p>
                    </div>
                    {plan.yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
                </div>
                <div className={styles.addOn}>
                    <Checkbox setBool={setCustomProfile} />
                    <div>
                        <h2>Customizable profile</h2>
                        <p>Custom theme on your profile</p>
                    </div>
                    {plan.yearly ? <p>+$20/yr</p> : <p>+$2/mo</p>}
                </div>
            </Card>

            <div className={styles.navBar}>

                <p onClick={prev}>Go Back</p> <Button onClick={handleSubmit}>Next Step</Button>
            </div>
        </div>
    )
}

export default PickAddForm
