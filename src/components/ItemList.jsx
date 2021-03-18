import React from 'react'
import '../styles/ItemList.scss'

class ItemList extends React.Component {
    

    render(){
        return(
             <div>
                {this.props.data.badges.map(dato => {
                    return(
                        <article className="List_card" key={dato.id}>
                            <picture className="List_card--contain-img">
                                <img src={dato.avatarUrl} alt=""/>
                            </picture>
                            <section className="List_card-info">
                                <h4 className="List_card-info--name">{dato.firtsName}{dato.lastName}</h4>
                                <h4 className="List_card-info--twitter">{dato.twitter}</h4>
                                <h4 className="List_card-info--Description">{dato.jobTitle}</h4>
                            </section>
                        </article>
                    )
                })}
            </div>
        )
    }
}

export default ItemList