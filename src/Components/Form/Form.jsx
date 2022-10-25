import React from 'react';
import {useDispatch} from 'react-redux';
import {addContact, updateContact} from '../redux/reducer/reducer'
import './Form.Style.scss'

function Form({update,setUpdate,formStatus,setFormStatus}){
    const dispatch = useDispatch()
    const handleUpdate = (e) =>{
        setFormStatus({...formStatus, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(update === 'add'){
            dispatch(addContact({...formStatus, id:Math.floor(Math.random()*1000)}))
        }
        else {
            dispatch(updateContact(formStatus))
        }
        setFormStatus({
            id: Math.floor(Math.random()*1000),
            firstName: '',
            lastName: '',
            number: ''
        })
        setUpdate('add')
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={'formContainer'}>
                <input type="text" name='firstName' value={formStatus.firstName} onChange={handleUpdate} placeholder="First Name"></input>
                <input type="text" name='lastName' value={formStatus.lastName} onChange={handleUpdate} placeholder="Last Name"></input>
                <input type="text" name='number' value={formStatus.number} onChange={handleUpdate} placeholder="Phone Number"></input>
                <button type='submit' className='addContactButton'> {update === 'add' ? 'ADD' : 'UPDATE'} </button>
            </form>
        </div>
    );
}

export default Form;