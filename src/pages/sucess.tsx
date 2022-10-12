import React from 'react';

import * as S from '@styles/sucess';

import LinkCopy from '@components/LinkCopy';

const Sucess = () => {
  return (
    <S.Container>
      <div>
        <h1>Inscrição Confirmada!</h1>
        <h2>Convide seus amigos e familiares a estarem presentes nesse grande evento! </h2>
        <p>Copie agora o link e compartilhe essa conferência que será um marco na sua vida e de seus amigos:</p>
        <LinkCopy />
        <div className='network'>
          <p>Compartilhe nas <br /> redes sociais:</p>
          <ul>
            <li>
              <button>
                <img src="assets/icons/facebook.svg" alt="facebook" />
              </button>
            </li>
            <li>
              <button>
                <img src="assets/icons/whatsapp.svg" alt="whatsapp" />
              </button>
            </li>
            <li>
              <button>
                <img src="assets/icons/instagram.svg" alt="instagram" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <img src="assets/cards.png" alt="cards" />
    </S.Container>
  );
}

export default Sucess;