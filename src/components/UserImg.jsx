import React from "react";
const uiavatars = require("ui-avatars");

const UserImg = ({firstName, lastName, className}) => {
  const avatarUrl = uiavatars.generateAvatar({
    uppercase: true,
    name: `${firstName} ${lastName}`,
    background: "ffd553",
    color: "000000",
    bold: true,
    length: 2,
  });

  return <img src={avatarUrl} className={className} />;
};

export default UserImg;
