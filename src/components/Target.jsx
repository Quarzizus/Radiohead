import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserImg from "./UserImg";
import "../styles/Target.scss";

const Target = ({ firstName, lastName, twitter, jobTitle }) => {
  const [nameClass, setNameClass] = useState(`None`);
  const location = useLocation();
  const match = useParams();
  useEffect(() => {
    location.pathname == `/list/${match.itemId}` ? setNameClass(`Block`) : null;
  }, []);
  return (
    <section className={`Target ${nameClass}`}>
      <article className="Target_header"></article>
      <article className="Target_profile">
        <picture className="Target_profile_container-img">
          <UserImg
            className="Target_profile-img"
            firstName={firstName}
            lastName={lastName}
          />
        </picture>
        <div className="Target_profile-fullname">
          <h2>{firstName || "first name"}</h2>
          <h2>{lastName || "last name"}</h2>
        </div>
      </article>
      <article className="Target_info">
        <h2>{jobTitle || "jobTitle"}</h2>
        <a>{twitter || "@twitter"}</a>
      </article>
      <article className="Target_footer">
        <i>#BananaKong</i>
      </article>
    </section>
  );
};

export default Target;
