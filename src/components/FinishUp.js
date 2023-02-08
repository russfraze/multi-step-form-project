import {useContext} from 'react'
import FormContext from '../context/FormContext'
import Button from './UI/Button'

function FinishUp() {
    const formCTX = useContext(FormContext)

    const {next} = formCTX
    return (
        <div>
            <h1>Finishing up</h1>
            <p>Double check everything looks OK before confirming.</p>
            <Button onClick={next}>Confirm</Button>
        </div>
    )
}

export default FinishUp


