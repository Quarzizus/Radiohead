import React from 'react'
import '../styles/ContainerForm.scss'

const ContainerForm = ({children}) => {
    return(
        <section className="containerForm">
            {children}
        </section>
    )

}

export default ContainerForm