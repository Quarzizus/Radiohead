import React from 'react'
import ItemList from '../components/ItemList'
import { Link } from 'react-router-dom'

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
            error: null,
        })

        try {
            const response = await fetch(`http://localhost:4001/Persons`)
            const data = await response.json()
            this.setState({
                loading: false,
                data: {
                    badges: data.badges
                },
            })
            
        } catch (error) {
            this.setState({
                error: error,
                loading: false
            })
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    render(){
        if(this.state.loading == true){
            return `Holi, estoy cargando`
        }
        
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