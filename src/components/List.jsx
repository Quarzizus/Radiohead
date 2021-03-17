import React from 'react'
import ItemList from '../components/ItemList'
import { Link } from 'react-router-dom'

import '../styles/List.scss'

class List extends React.Component {
    // call super for extends 
    constructor(props){
        super(props);
        this.state = {
            data: []          
        }
        console.log("Soy el constructor")
    }
    componentDidMount(){
        console.log("Soy el componentDidMount")
        // it is "this" for be a function 
        this.idTime = setTimeout(() => {
            this.setState({
                data: [
                    {
                        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                        irstName: "Freda",
                        lastName: "Grady",
                        email: "Leann_Berge@gmail.com",
                        jobTitle: "Legacy Brand Director",
                        twitter: "FredaGrady22221-7573",
                        avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                      },
                      {
                        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                        firstName: "Major",
                        lastName: "Rodriguez",
                        email: "Ilene66@hotmail.com",
                        jobTitle: "Human Research Architect",
                        twitter: "ajorRodriguez61545",
                        avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                      },
                      {
                        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                        firstName: "Daphney",
                        lastName: "Torphy",
                        email: "Ron61@hotmail.com",
                        jobTitle: "National Markets Officer",
                        twitter: "DaphneyTorphy96105",
                        avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                      }
                  ]     
            })
        }, 4000);
    }
    
    componentDidUpdate(prevProps,PreState){
        console.log("Soy el componentDidUpdate")
        console.log({
            prevProps: prevProps, 
            PreState: PreState
        })
        console.log({
            Props: this.props, 
            State: this.state
        })

    }
    
    componentWillUnmount(){
        console.log("Soy el willMount");
        // clear timeout and memory
        clearTimeout(this.idTime)
    }

    render(){
        console.log("Soy el render")
        return(
            <section className="container-List">
                <div className="List">
                    <button className="List_button">
                        <Link to="/registre" className="List_button-link"> Registre</Link>
                    </button>
                    <ItemList data={this.state.data}/>
                </div>
            </section>
        )
    }
}

export default List