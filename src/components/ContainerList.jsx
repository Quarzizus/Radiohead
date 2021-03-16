import React from 'react'
import Header from './Header'
import List from '../components/List'

class ContainerList extends React.Component {
    render(){
        return(
            <div className="containerList">
                <Header/>
                <List/>
            </div>
        )
    }
}

export default ContainerList