import React from 'react'
import Header from '../components/Header'
import ContainerForm from '../assets/ContainerForm'
import Form from '../components/Form'
import Target from '../components/Target'

class ContainerHero extends React.Component {
    state = {
        form: {
            firtsName: "",
            lastName: "",
            jobTitle: "",
            email: "",
            twitter: "",
        }    
    }
    clickHandler =(e)=>{
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
    render(){
        return(
            <div className="ContainerHero">
                <Header/>
                <ContainerForm>           
                    <Target valuesForm={this.state.form}/>
                    <Form onChange={this.clickHandler}/>
                </ContainerForm>
            </div>
        )
    }
}

export default ContainerHero