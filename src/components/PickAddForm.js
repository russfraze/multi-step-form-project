import { useContext} from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PickAddForm.module.css'
import AddOnList from './AddOnList'
import { ReactComponent as SidebarDesktop } from '../assets/bg-sidebar-desktop.svg'


function PickAddForm() {
    const formCTX = useContext(FormContext)

    const { next, prev} = formCTX


    const handleSubmit = (e) => {
        e.preventDefault()
        next()
    }
    

    return (
        <div>
            <Card shadow={true}>
                <div className={styles.addOns}>
                    <div className={styles.stepsNav} >
                        <SidebarDesktop />
                    </div>
                    <div className={styles.addOnsData}>
                        <h1>Pick add ons</h1>
                        <p>Add-ons help enhance your gaming experience.</p>

                        <AddOnList />
                    </div>
                </div>
            </Card>

            <div className={styles.navBar}>

                <p onClick={prev}>Go Back</p> <Button onClick={handleSubmit}>Next Step</Button>
            </div>
        </div>
    )
}

export default PickAddForm
