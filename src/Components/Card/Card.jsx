import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, checkContact } from '../redux/reducer/reducer';
import './Card.Style.scss'
import Delete from '../../Assets/Pictures/remove.png'
import Update from '../../Assets/Pictures/updated.png'
import Favorite from '../../Assets/Pictures/love.png'
import Unfavorite from '../../Assets/Pictures/unlove.png'

function Card({setUpdate, setFormStatus}) {
    const ContactData = useSelector(state => state.contact)
    const dispatch = useDispatch()

    const handleUpdate = (contact) => {
        setFormStatus(contact)
        setUpdate('update')
    }

    const handleDelete = (id) => {
        if (window.confirm("Are You Sure?"))
        {
            dispatch(deleteContact(id))
        }
    }

    const handleCheck = (id) => {
        dispatch(checkContact(id))
    }

    const [search, setSearch] = useState('')
    const handleSearch = e => {
        setSearch(e.target.value)
    }


    return (
        <div>
            <div className='searchBox'>
                <input value={search}  onChange={handleSearch} placeholder="Search..."></input>
            </div>
            {ContactData.filter(contact => contact.firstName.toUpperCase().includes(search.toUpperCase())).map(contact =>
                <div className='cardContainer'>
                    <div key={contact.id} className='card'>
                        <div className='avatar'>
                            <p>{contact.id}</p>
                            <img style={{width: '50px'}} src={`https://api.multiavatar.com/Starcrasher/:${contact.id}.svg`} />                            
                        </div>

                        <div className='contactInfo'>
                            <div className='contactName'>
                                <p>{contact.firstName}</p>
                                <p>{contact.lastName}</p>
                            </div>
                            <p>{contact.number}</p>
                        </div>
                        <div className='fav'>
                        <p className='favoriteButton' onClick={() => handleCheck(contact.id)} style={{cursor: 'pointer'}}>
                            {contact.state ? <img src={Favorite} /> : <img src={Unfavorite} />} 
                        </p>
                        </div>
                        <div className='buttonContainer'>
                            <button className='button' onClick={() => handleUpdate(contact)}><img src={Update} /></button>
                            <button className='button' onClick={() => handleDelete(contact.id)}> <img src={Delete} /> </button>
                        </div>
                    </div>
                </div>
                )}
        </div>
    );
}

export default Card;