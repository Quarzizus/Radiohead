import React from 'react'
import ContainerForm from '../assets/ContainerForm'
import Form from '../components/Form'
import Target from '../components/Target'

class ContainerHero extends React.Component {
    state = {
        loading: false,
        error: null,
        form: {
            firtsName: "",
            lastName: "",
            jobTitle: "",
            email: "",
            twitter: "",
        }    
    }
    changeHandler =(e)=>{
        this.setState({
            form: {
                // dejamos caer los valores anteriores
                ... this.state.form,
                // y los sobreescribimos, 
                // trabajando con corchetes y variables
                [e.target.name]: e.target.value
            }    
        })
    }
    submitHandler = async(e)=>{
        e.preventDefault();
    }

    render(){
        return(
            <div className="ContainerHero">
                <ContainerForm>           
                    <Target valuesForm={this.state.form}/>
                    <Form onChange={this.changeHandler} onSubmit={this.submitHandler}/>
                </ContainerForm>
            </div>
        )
    }
}

export default ContainerHero