import FormContext from '../context/FormContext'
import { useContext, useRef, useState } from 'react'
import Button from './UI/Button'
import Card from './UI/Card'
import styles from './PersonalInfoForm.module.css'

function PersonalInfoForm() {
    const formCXT = useContext(FormContext)
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true)
    const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(true)
    const [enteredPhoneIsValid, setEnteredPhoneIsValid] = useState(true)
    



    const { next, setPersonalInfo } = formCXT

    const nameInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef = useRef()



    const handleSubmit = (e) => {
        e.preventDefault()

        const enteredName = nameInputRef.current.value
        const enteredEmail = emailInputRef.current.value
        const enteredPhone = phoneInputRef.current.value


        if(enteredName.trim() === ''){
            setEnteredNameIsValid(false)
            return
        }

        setEnteredNameIsValid(true)

        if(enteredEmail.trim() === ''){
            setEnteredEmailIsValid(false)
            return
        }

        setEnteredEmailIsValid(true)

        if(enteredPhone.trim() === '' || enteredPhone.trim().length < 10){
            setEnteredPhoneIsValid(false)
            return
        }

        setPersonalInfo({
            name: enteredName,
            email: enteredEmail,
            phone: enteredPhone
        })

        next()


    }

    // const inputStyles = 'invalid'
    const nameInputStyles = enteredNameIsValid ? '' : 'invalid'
    const emailInputStyles = enteredEmailIsValid ? '' : 'invalid'

    return (


        <div>


            <form onSubmit={handleSubmit}>
                <Card shadow={true} >

                    <div className={styles.personalInfo}>
                        <div className={styles.stepsNav}></div>
                        <div className={styles.personalInfoData}>
                            <h1>Personal info</h1>
                            <p>Please provide your name, email address, and phone number.</p>

                            <div className={`${'flexGroup__col'} ${nameInputStyles}`}>
                                {enteredNameIsValid ? '' : <label className={styles.error}>This field is required</label>}
                                <label htmlFor='name'>Name</label>
                                <input ref={nameInputRef} type='text' id='name' placeholder='e.g. Stephen King' />
                            </div>

                            <div className={`${'flexGroup__col'} ${emailInputStyles}`}>
                                {enteredEmailIsValid ? '' : <label className={styles.error}>This field is required</label>}
                                <label>Email Address</label>
                                <input ref={emailInputRef} type='email' id='email' placeholder='e.g. stephenking@lorem.com' />
                            </div>

                            <div className='flexGroup__col'>
                                <label >Phone Number</label>
                                <input ref={phoneInputRef} type='tel' id='phone' placeholder='e.g. +1 234 567 890' />
                            </div>
                        </div>
                    </div>
                </Card>

                <div className={styles.navBar}>
                    <Button>Next Step</Button>
                </div>

            </form>
        </div>


    )
}

export default PersonalInfoForm
