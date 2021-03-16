import React from 'react'
import ContainerHero from '../components/ContainerHero'
import ContainerList from '../components/ContainerList'
import '../styles/App.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const App =()=> {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ContainerHero}/>
                <Route exact path="/list" component={ContainerList} />
                <Route exact path="/registre" component={ContainerHero}/>
            </Switch>
        </BrowserRouter> 
    )
}

export default App