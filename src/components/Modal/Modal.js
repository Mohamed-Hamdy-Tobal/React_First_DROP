import React, { useState } from "react";
import styles from './Modal.module.css'
import ReactDOM  from 'react-dom';
import Form from "./form"

const BackDrop = () => {
    return <div className={styles.backDrop}></div>
}
const Overlay = ({showT, newUser, myLen}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const onSubmitHandler = (e) => {
        console.log(`Submit => ${name}, ${price}, ${description}, ${image}`);
        e.preventDefault()

        newUser(
            {
                "id": `${myLen+1}`,
                name,
                price,
                description,
                image
            }
        )
        setName('')
        setPrice('')
        setDescription('')
        setImage('')
    }

    return (
        <div className={styles.overlay}>
            <Form onSubmit={onSubmitHandler}>
                <Form.ChildrenInput label="title" value={name} inputHandler={(e) => {
                    setName(e.target.value)
                }}/>
                <Form.ChildrenInput label="price" type='number' value={price} inputHandler={(e) => {
                    setPrice(e.target.value)
                }}/>
                <Form.ChildrenInput label="description" value={description} inputHandler={(e) => {
                    setDescription(e.target.value)
                }}/>
                <Form.ChildrenInput label="image" value={image} inputHandler={(e) => {
                    setImage(e.target.value)
                }}/>
                <div className="buttons d-flex gap-3 w-100">
                    <button style={{width: '50%',fontSize: '30px'}} type="reset" className="btn btn-danger" onClick={() => {
                        setName('')
                        setPrice('')
                        setDescription('')
                        setImage('')
                        }}>Reset</button>

                    <input type="submit" value="Submit" style={{width: '50%',fontSize: '30px'}} className="btn btn-danger" onClick={showT} />
                </div>
            </Form>
        </div>
    )
}

const Modal = ({show, showF, newUser, myLen}) => {
    return(
        ReactDOM.createPortal(
            <div className={`${styles.modal} ${show?styles.showing:null}`}>
                <BackDrop />
                <Overlay showT={showF} newUser={newUser} myLen={myLen}/>
            </div>,
            document.getElementById("modal")
        )
    )
}

export default Modal;

