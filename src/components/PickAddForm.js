import { useContext, useState } from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PickAddForm.module.css'
import AddOnList from './AddOnList'
import Checkbox from '../components/UI/Checkbox'


function PickAddForm() {
    const formCTX = useContext(FormContext)

    const { next, prev, setAddOns, plan } = formCTX


    const [onlineService, setOnlineService] = useState(false)
    const [largerStorage, setLargerStorage] = useState(false)
    const [customProfile, setCustomProfile] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        // setAddOns({
        //     onlineService: onlineService,
        //     largerStorage: largerStorage,
        //     customProfile: customProfile
        // })
        next()
    }
    console.log(onlineService)

    return (
        <div>
            <Card shadow={true}>
                <h1>Pick add ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>

                <AddOnList setOnlineService={setOnlineService} setLargerStorage={setLargerStorage} setCustomProfile={setCustomProfile} />

            </Card>

            <div className={styles.navBar}>

                <p onClick={prev}>Go Back</p> <Button onClick={handleSubmit}>Next Step</Button>
            </div>
        </div>
    )
}

export default PickAddForm
