import React from 'react';

import * as S from './styles';

const CardSubscribe = () => {

  return (
    <S.Container>
      <img src="assets/card-subscribe.png" alt="subscribe" />
      <h1>Homens de <br /> verdade</h1>
      <ul>
        <li>
          <img src="assets/icons/calendar.svg" alt="calendar" />
          <span>de 07 à 09 <br /> de setembro</span>
        </li>
        <li>
          <img src="assets/icons/location.svg" alt="location" />
          <span>Nova Aliança Agape <br /> João Pessoa</span>
        </li>
        <span>#0231204</span>
      </ul>
      <div>
        <img src="assets/perfil.png" alt="perfil" />
        <div>
          <strong>Júnior Robert</strong>
          <span>Nova Aliança Emanuel João Pessoa</span>
        </div>
      </div>
    </S.Container>
  );
}

export default CardSubscribe;

