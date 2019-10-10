import React from 'react'
import Contact from './Contact'



const users = [
    {
        name : 'Evan Ellis',
        avatar: 'https://randomuser.me/api/portraits/men/50.jpg',
        online: true,
    },

    {  
        name : 'Anna Jacobs',
        avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
        online: true,
    },

    {   
        name : 'Gordon Hudson',
        avatar: 'https://randomuser.me/api/portraits/men/94.jpg',
        online: true,
    },

    {   
        name : 'Alvin Stephens',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        online: false,
    
    },

    {   
        name : 'Joseph Watson',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        online: true,
    }
    
]

function ContactList(){

    return (
        users.map(listusers =>(
            <Contact
                name = {listusers.name}
                avatar = {listusers.avatar}
                online = {listusers.online}
            
            />

        )

        )
    )
}

export default ContactList;
