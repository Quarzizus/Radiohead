import React from "react";
const uiavatars = require("ui-avatars");

const UserImg = (props) => {
  const firstName = props.firstName;
  const lastName = props.lastName;
  const avatarUrl = uiavatars.generateAvatar({
    uppercase: true,
    name: `${firstName} ${lastName}`,
    background: "a5daa6",
    color: "000000",
    bold: true,
    length: 2,
  });

  return <img src={avatarUrl} className={props.className} />;
};

export default UserImg;
