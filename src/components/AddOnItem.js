import { useContext, useState, useEffect } from 'react'
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
        console.log('current index from handle check', currentIndex )
        setChecked(() => !checked)
        let newAddOnsData = [...addOns]
        newAddOnsData[currentIndex] = {...newAddOnsData[currentIndex], selected: !newAddOnsData[currentIndex].selected}
        setAddOns(newAddOnsData)

    }
    console.log('newData', addOns)
    console.log('checked from the item', checked)

    return (
        <Card addOn={true} outlined={true} checked={checked} selected={checked ? true : false}>
            <div className={`${styles.addOn} ${'flexGroup'}`}>
                <Checkbox setChecked={setChecked} checked={checked} onCheck={handleCheck} />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>
                </div>
                {plan.yearly ? <p>+$10/yr</p> : <p>{addOns[props.index].costMo}</p>}
            </div>
        </Card>
    )
}

export default AddOnItem
