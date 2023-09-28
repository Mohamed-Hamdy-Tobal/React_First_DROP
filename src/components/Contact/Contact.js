import React, { useState , useEffect} from "react";
import './Contact.css'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState('')

    var hName;
    var hPhone; 
    if (name) {
        hName = <p className='well-child'>Hello <span>{name}</span></p>
    }
    if (phone) {
        hPhone = <p className='well-child'>Your Phone <span>{phone}</span></p>
    }

    useEffect(() => {
        console.log("effect render")
        if (name) {
            console.log("UseEffect() called For Name", name)
        }
    })

    console.log('render')
    return (
        <div className='contact'>
            <label htmlFor='name'>Name: </label>
            <input type='text' id='name' value={name} placeholder='Enter Your Name' onChange={(e) => {
                setName(e.target.value)
            }}/>
            <br/>
            <label htmlFor='phone'>Phone: </label>
            <input type='text' id='phone' value={phone} placeholder='Enter Your Phone' onChange={(e) => {
                setPhone(e.target.value)
            }}/>
            <div className='well'>
                {hName}
                {hPhone}
            </div>
        </div>
    )
}

export default Contact
