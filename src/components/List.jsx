import React from 'react'
import ItemList from '../components/ItemList'
import { Link } from 'react-router-dom'
import Loader from './Loader'

import '../styles/List.scss'

class List extends React.Component {
    
    state = {
        loading: true,
        data: {
            badges: []
        },
        error: null,
    }

    fetchData = async () => {
        this.setState({
            loading: true,
        })
        try {
            const response = await fetch(`http://localhost:8081/badges`)
            const data = await response.json()
            this.setState({
                data: {
                    badges: data
                },
                loading: false,
                error: null, 
            })
 
            
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    render(){
        if(this.state.loading == true){
            return <Loader/>
        }
        
        console.log("Soy el render")
        return(
            <section className="container-List">
                <div className="List">
                    <button className="List_button">
                        <Link to="/registre" className="List_button-link">Registre</Link>
                    </button>
                    <ItemList data={this.state.data}/>
                </div>
            </section>
        )
    }
}

export default List