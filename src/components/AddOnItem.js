import { useContext, useState } from 'react'
import styles from './AddOnItem.module.css'
import FormContext from '../context/FormContext'
import Card from './UI/Card'
import Checkbox from './UI/Checkbox'


function AddOnItem(props) {
    const formCTX = useContext(FormContext)
    const { plan, setAddOns, addOns } = formCTX
    const [checked, setChecked] = useState(false)


    const handleCheck = () => {
        let currentIndex = props.index
        setChecked(() => !checked)
        let newAddOnsData = [...addOns]
        newAddOnsData[currentIndex] = { ...newAddOnsData[currentIndex], selected: !newAddOnsData[currentIndex].selected }
        setAddOns(newAddOnsData)

    }

    return (
        <Card addOn={true} outlined={true} checked={checked} selected={checked ? true : false}>
            <div className={`${styles.addOn} ${'flexGroup'} ${styles.itemSpacing}`}>
                <div>
                    <div className={styles.checkBoxGroup}>
                        <Checkbox setChecked={setChecked} checked={checked} onCheck={handleCheck} />
                        <div>
                            <h2>{props.name}</h2>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
                {plan.yearly ? <p className={styles.price}>{`+${addOns[props.index].priceYr}/yr`}</p> : <p className={styles.price}>{`+${addOns[props.index].priceMo}/mo`}</p>}
            </div>
        </Card>
    )
}

export default AddOnItem
