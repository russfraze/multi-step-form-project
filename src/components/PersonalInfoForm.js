import FormContext from '../context/FormContext'
import {useContext, useRef} from 'react'
import Button from './UI/Button'

function PersonalInfoForm() {
    const formCXT = useContext(FormContext)

    const {next, setPersonalInfo} = formCXT

    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef = useRef()

  

    const handleSubmit = (e) => {
        e.preventDefault()
        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPhone = phoneInputRef.current.value

        setPersonalInfo({
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone
        })

        next()
        

    }

    return (
        
        <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor='name'>Name</label>
                <input ref={nameInputRef} type='text' id='name' placeholder='e.g. Stephen King'/>
                </div>

                <div>
                <label>Email Address</label>
                <input ref={emailInputRef} type='email' id='email' placeholder='e.g. stephenking@lorem.com'/>
                </div>

                <div>
                <label >Phone Number</label>
                <input ref={phoneInputRef} type='tel' id='phone' placeholder='e.g. +1 234 567 890'/>
                </div>

                <Button>next</Button>
            </form>
        </div>
        
    )
}

export default PersonalInfoForm
