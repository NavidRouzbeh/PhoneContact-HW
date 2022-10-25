import React , {useState} from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Profile from '../Profile/Profile'

function Home() {
    const [update, setUpdate] = useState('add')
    const [formStatus, setFormStatus] = useState({
        id: Math.floor(Math.random()*1000),
        firstName: '',
        lastName: '',
        number: '',
        state: false
    })

    return (
        <div>
            <Profile />
            <Form update={update} setUpdate={setUpdate} formStatus={formStatus} setFormStatus={setFormStatus} />
            <Card setUpdate={setUpdate} setFormStatus={setFormStatus} />
        </div>
    );
}

export default Home;