import { useContext } from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PickAddForm.module.css'
import Checkbox from '../components/UI/Checkbox'


function PickAddForm() {
    const formCTX = useContext(FormContext)

    const { next } = formCTX

    return (
        <div>
            <h1>Pick add ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>


            <div className={styles.addOn}>
                <Checkbox />
                <div>
                    <h2>Online service</h2>
                    <p>Access to multiplayer games</p>
                </div>
                <p>+$1/mo</p>
            </div>


            <Button onClick={next}>Next Step</Button>
        </div>
    )
}

export default PickAddForm
