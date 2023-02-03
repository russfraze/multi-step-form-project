import FormContext from '../context/FormContext'
import {useContext} from 'react'
import Button from './UI/Button'

function PersonalInfoForm() {
    const formCXT = useContext(FormContext)

    const {next} = formCXT

    return (
        
        <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form>
                <div>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='e.g. Stephen King'/>
                </div>

                <div>
                <label>Email Address</label>
                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com'/>
                </div>

                <div>
                <label >Phone Number</label>
                <input type='tel' id='phone' placeholder='e.g. +1 234 567 890'/>
                </div>

                <Button onClick={next}>next</Button>
            </form>
        </div>
        
    )
}

export default PersonalInfoForm
