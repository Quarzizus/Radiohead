import React from 'react'
import '../styles/Form.scss'

class Form extends React.Component {

    sendHandler =(e)=>{
        e.preventDefault()
    }
    render(){
        return(
            <form className="Form" action="">
                <label>Firts Name</label>
                <input 
                    onChange={this.props.onChange}
                    name="firtsName" 
                    type="text"
                    //value={this.state.firtsName}
                    placeholder="Pepe"/>
                <label>Last Name</label>
                <input 
                    onChange={this.props.onChange}
                    name="lastName" 
                    type="text" 
                    //value={this.state.lastName}
                    placeholder="Perez"/>
                <label>Job Title</label>
                <input 
                    onChange={this.props.onChange}
                    name="jobTitle" 
                    type="text"
                    //value={this.state.jobTitle}
                    placeholder="Frontend Developer"/>
                <label>Email</label>
                <input
                    onChange={this.props.onChange}
                    name="email"
                    type="email"
                    //value={this.state.email}
                    placeholder="correo@example.com"/>
                <label>Twitter</label>
                <input
                    onChange={this.props.onChange}
                    name="twitter" 
                    type="text"
                    //value={this.state.twitter}
                    placeholder="@pepeperez"/>
                <button onClick={this.sendHandler} className="Form_updateImage">
                    Image
                </button>
                <article className="Form_terms">
                    <input type="checkbox"/>
                    <h4><a href="#">Terminos y condiciones</a></h4>
                </article>
                    
                <button 
                    onClick={this.props.click}
                    onSubmit={this.props.onSubmit}
                    className="Form_send"
                >
                    Send
                </button>
            </form>
        )
    }
}

export default Form