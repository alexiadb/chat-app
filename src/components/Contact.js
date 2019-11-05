import React from 'react'
import './Contact.css'


class Contact extends  React.Component {
    constructor (props){
        super (props)
        this.state = {
            online: false

        
        }
    }
    render (){
        return(

            <>
            <div className ="Contact">
                <div>
                    <img className='avatar'
                 
                        src={this.props.avatar}
                        alt= {this.props.name}></img>
                
                </div>
            <div className = 'Contact'>
                <p className = 'name'>{this.props.name}</p>

            </div>
        
                <div className='status' onClick = {() => this.setState({online:! this.state.online})}>

                {this.state.online ? <i className='status-online'></i> : <i className= 'status-offline'></i>}
                {this.state.online ? 'Online' : 'Offline'}
                </div>
            
            </div>
            </>
            
        )

    }
}


export default Contact