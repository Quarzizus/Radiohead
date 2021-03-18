import React from 'react'
import '../styles/Target.scss'
import Gravatar from '../components/Gravatar'

class Target extends React.Component {

    render(){
        return(
            <section className="Target">
                <article className="Target_header">
        
                </article>
                <article className="Target_profile">
                    <picture className="Target_profile_container-img">
                        <Gravatar 
                        className="Target_profile-img"
                        email={this.props.valuesForm.email}
                        />
                    </picture>
                    <div className="Target_profile-fullname">
                        <h2>{this.props.valuesForm.firtsName || "firts name" }</h2>
                        <h2>{this.props.valuesForm.lastName || "last name" }</h2>
                    </div>
                </article>
                <article className="Target_info">
                    <h2>{this.props.valuesForm.jobTitle || "jobTitle"}</h2>
                    <a>{this.props.valuesForm.twitter || "@twitter"}</a>
                </article>
                <article className="Target_footer">
                    <i>#VamosQuePodemos</i>
                </article>
            </section>
        )
    }   
}

export default Target