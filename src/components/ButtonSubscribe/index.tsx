import { api } from '@config/api';
import { getStripeJs } from '@config/stripe-js';
import React, { FormEvent } from 'react';

import * as S from './styles';

interface IUser{
  user: {
    name: string;
    email: string;
    whatsapp: string;
    congregation: string;
  }
}

const ButtonSubscribe = ({user}: IUser) => {

  const handleSubscribe = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if(user.email && user.name && user.whatsapp && user.congregation){
      try {
        const response = await api.post('/subscribe', user);
  
        const { sessionId } = response.data;
  
        const stripe = await getStripeJs();
  
        await stripe?.redirectToCheckout({sessionId})
      } catch (err) {
        alert(err)
      } finally {
      }
    }
  }

  return (
    <S.Container onClick={handleSubscribe}>
      Inscrever-se
    </S.Container>
  );
}

export default ButtonSubscribe;

