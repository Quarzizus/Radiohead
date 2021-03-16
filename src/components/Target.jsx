import React from 'react'
import '../styles/Target.scss'
import Perfil from '../images/Wall.png'
import headerImg from '../images/target_header.jpg'
class Target extends React.Component {

    render(){
        return(
            <section className="Target">
                <article className="Target_header">
        
                </article>
                <article className="Target_profile">
                    <picture className="Target_profile_container-img">
                        <img src={Perfil} alt="pictureS" className="Target_profile-img"/>
                    </picture>
                    <div className="Target_profile-fullname">
                        <h2>{this.props.valuesForm.firtsName}</h2>
                        <h2>{this.props.valuesForm.lastName}</h2>
                    </div>
                </article>
                <article className="Target_info">
                    <h2>{this.props.valuesForm.jobTitle}</h2>
                    <a>{this.props.valuesForm.twitter}</a>
                </article>
                <article className="Target_footer">
                    <i>#VamosQuePodemos</i>
                </article>
            </section>
        )
    }   
}

export default Target