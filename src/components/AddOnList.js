import {useContext} from 'react'
import FormContext from '../context/FormContext'
import AddOnItem from './AddOnItem'

function AddOnList() {
    const formCXT = useContext(FormContext)
    const {addOns} = formCXT


    return (
        <div>
            {addOns.map((addOn, index) => <AddOnItem name={addOn.name} key={addOn.name} description={addOn.description} costMo={addOn.costMo} costYr={addOn.costYr} index={index} />)}
        </div>
    )
}

export default AddOnList
