import React from "react";
import "../styles/Target.scss";
import UserImg from "./UserImg";

const Target = (props) => {
  return (
    <section className="Target">
      <article className="Target_header"></article>
      <article className="Target_profile">
        <picture className="Target_profile_container-img">
          <UserImg
            className="Target_profile-img"
            firstName={props.firstName}
            lastName={props.lastName}
          />
        </picture>
        <div className="Target_profile-fullname">
          <h2>{props.firstName || "first name"}</h2>
          <h2>{props.lastName || "last name"}</h2>
        </div>
      </article>
      <article className="Target_info">
        <h2>{props.jobTitle || "jobTitle"}</h2>
        <a>{props.twitter || "@twitter"}</a>
      </article>
      <article className="Target_footer">
        <i>#BananaKong</i>
      </article>
    </section>
  );
};

export default Target;
