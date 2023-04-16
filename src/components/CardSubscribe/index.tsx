import React from "react";

import * as S from "./styles";

import conference from "../../../event.json";

interface IUser {
  user: {
    _id: String;
    name: String;
    email: String;
    whatsapp: String;
    congregation: String;
  };
}

const CardSubscribe = ({ user }: IUser & any) => {
  return (
    <S.Container>
      <img src="/assets/card-subscribe.png" alt="subscribe" />
      <h1>{conference.conference[0].title}</h1>
      <ul>
        <li>
          <img src="/assets/icons/calendar.svg" alt="calendar" />
          <b>{conference.conference[0].date}</b>
        </li>
        <li>
          <img src="/assets/icons/location.svg" alt="location" />
          <b>{conference.conference[0].location}</b>
        </li>
        <span>#{user?._id?.substring(0, 7)}</span>
      </ul>
      <div>
        <img src="/assets/perfil.png" alt="perfil" />
        <div>
          <strong>{user?.name}</strong>
          <span>{user?.congregation}</span>
        </div>
      </div>
    </S.Container>
  );
};

export default CardSubscribe;
