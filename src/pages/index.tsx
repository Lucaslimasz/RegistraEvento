import { api } from '@config/api';
import { stripe } from '@config/stripe';
import { getStripeJs } from '@config/stripe-js';
import type { GetServerSideProps } from 'next'
import { FormEvent } from 'react';

import * as S from './styles';

interface IProduct {
  product: {
    priceId: string,
    amount: string, 
  }
}

const Home = ({product}: IProduct) => {
  
  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({sessionId})
    } catch (err) {
      alert(err)
    }
  }

  return (
    <>
      <img src="assets/background.png" alt="background" className='background' />
      <S.Container>
        <div>
          <S.Tag>Homens de Verdade</S.Tag>
          <h1>Você não pode perder essa mega conferência</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's.</p>

          <ul>
            <li>
              <img src="assets/icons/calendar.svg" alt="calendar" />
              <span>de 07 à 09 <br /> de setembro</span>
            </li>
            <li>
              <img src="assets/icons/location.svg" alt="location" />
              <span>Nova Aliança Agape <br /> João Pessoa</span>
            </li>
            <li>
              <img src="assets/icons/dollar.svg" alt="dollar" />
              <span>{product.amount}</span>
            </li>
          </ul>

          <div>
            <h2>Ministrantes:</h2>
            <ul>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
              <li>
                <img src="assets/ministrante.png" alt="ministrante" />
                <span>Pr. Raimundo Nonato</span>
              </li>
            </ul>

            <h3>Você não pode perder</h3>
          </div>

        </div>
        <form onSubmit={handleSubscribe}>
          <input placeholder='Nome completo' />
          <input placeholder='E-mail' />
          <input placeholder='Whatsapp' />
          <input placeholder='Cidade' />
          <input placeholder='Congregação' />
          <input type='submit' value='Inscrever-se'/>
        </form>
      </S.Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const price: any = await stripe.prices.retrieve('price_1Lq0gyBGniSjo37yWKVX4VFc', {
    expand: ['product']
  });

  const currentPrice = price.unit_amount / 100

  const product = {
    priceId: price.id,
    amount: currentPrice.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}), 
  }

  return {
    props: {
      product
    }
  }
}

export default Home
