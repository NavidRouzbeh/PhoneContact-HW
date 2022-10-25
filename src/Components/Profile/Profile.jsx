import React from 'react';
import logo from '../../Assets/Pictures/1.svg'
import './Profile.Style.scss'

function Profile (){
    return (
        <div className='profileContainer'>
            <div>
                <img style={{width:'80px'}} src={logo}/>
            </div>
            <div className='profileDetail'>
                <h2>Navid Rouzbeh</h2>
                <p>09918675726</p>
            </div>
        </div>
    )
};

export default Profile;