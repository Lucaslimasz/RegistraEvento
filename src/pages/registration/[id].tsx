import React, { useEffect, useState } from 'react';
import {useRouter} from 'next/router'

import * as S from '@styles/sucess';

import LinkCopy from '@components/LinkCopy';
import CardSubscribe from '@components/CardSubscribe';
import { api } from '@config/api';

interface IUser {
  user: {
    _id: String;
    name: String;
    email: String;
    whatsapp: String;
    congregation: String;
  }
}

const Sucess = () => {
  const router = useRouter()
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    (async () => {
      const {id} = router.query
      const {data} = await api.post('/users', {id});
      console.log(data)
      setUser(data)
    })()
  }, [router.query]);


  if(!user){
    return <h1>Carregando...</h1>
  }

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
                <img src="/assets/icons/facebook.svg" alt="facebook" />
              </button>
            </li>
            <li>
              <button>
                <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
              </button>
            </li>
            <li>
              <button>
                <img src="/assets/icons/instagram.svg" alt="instagram" />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <CardSubscribe user={user} />
    </S.Container>
  );
}

export default Sucess;