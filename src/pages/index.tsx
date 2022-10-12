import { ChangeEvent, useEffect, useState } from 'react'

import type { GetServerSideProps } from 'next'
import { stripe } from '@config/stripe';

import ButtonSubscribe from '@components/ButtonSubscribe'

import * as S from './styles';

interface IProduct {
  product: {
    priceId: string,
    amount: string,
  }
}

export interface IUser {
  name: string;
  email: string;
  whatsapp: string;
  congregation: string;
}

const Home = ({ product }: IProduct) => {
  const [user, setUser] = useState<IUser>({} as IUser)

  const handleUser = (event: ChangeEvent<HTMLInputElement>) => {
    setUser(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
  }

  return (
    <>
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
        <form>
          <input
            placeholder='Nome completo'
            name='name'
            onChange={
              (e: ChangeEvent<HTMLInputElement>) => handleUser(e)}
          />
          <input
            placeholder='E-mail'
            name='email'
            onChange={
              (e: ChangeEvent<HTMLInputElement>) => handleUser(e)}
          />
          <input
            placeholder='Whatsapp'
            name='whatsapp'
            onChange={
              (e: ChangeEvent<HTMLInputElement>) => handleUser(e)}
          />
          <input
            placeholder='Congregação'
            name='congregation'
            onChange={
              (e: ChangeEvent<HTMLInputElement>) => handleUser(e)}
          />
          <ButtonSubscribe user={user} />
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
    amount: currentPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
  }

  return {
    props: {
      product
    }
  }
}

export default Home
