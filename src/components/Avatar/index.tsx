import React from "react";
import "./styles.scss";

type TPropsType = {
  name: string;
  imgUrl: string;
  isOnline?: boolean;
  children?: React.ReactNode;
};

const Avatar = ({ name, imgUrl, isOnline = false, children }: TPropsType) => {
  return (
    <div className="avatar-component">
      <div className="avatar-component__img-content">
        <img className="avatar-component__img" src={imgUrl} alt="#" />
      </div>
      <p
        className="avatar-component__name"
        style={{
          color: isOnline ? "green" : "red",
        }}
      >
        {name}
      </p>
      {children}
    </div>
  );
};

export default Avatar;
