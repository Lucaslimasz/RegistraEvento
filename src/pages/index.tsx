import type { NextPage } from 'next'

import * as S from './styles';

const Home: NextPage = () => {
  return (
    <>
      <img src="assets/background.png" alt="background" className='background'/>
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
              <span>R$ 30,00</span>
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
          <input placeholder='Nome completo' />
          <input placeholder='E-mail' />
          <input placeholder='Whatsapp' />
          <input placeholder='Cidade' />
          <input placeholder='Congregação' />
          <input type='submit' value='Inscrever-se' />
        </form>
      </S.Container>
    </>
  )
}

export default Home
