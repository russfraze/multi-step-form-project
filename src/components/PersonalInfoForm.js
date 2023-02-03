import Steps from './Steps'

function PersonalInfoForm() {
    return (
        
        <div>
            <h1>Personal info</h1>
            <p>Please provide your name, email address, and phone number.</p>

            <form>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' placeholder='e.g. Stephen King'/>

                <label>Email Address</label>
                <input type='email' id='email' placeholder='e.g. stephenking@lorem.com'/>

                <label >Phone Number</label>
                <input type='tel' id='phone' placeholder='e.g. +1 234 567 890'/>
            </form>
        </div>
        
    )
}

export default PersonalInfoForm
