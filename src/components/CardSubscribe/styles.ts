import styled from 'styled-components';

export const Container = styled.section`
  padding: 1.875rem 0px 1.875rem 2.5rem;
  background: var(--dark);
  border: 1px solid var(--red);
  border-radius: 0.625rem;
  position: relative;
  margin: auto;
  white-space: nowrap;

  > img {
    position: absolute;
    top: -20px;
    right: 0;
    z-index: -1;
    width: 610px;
    transform: rotate(10deg);
  }

  >h1 {
    font-weight: 900;
    font-size: 2rem;
    line-height: 1.75rem;
    letter-spacing: -0.04em;
    color: var(--red);
    text-transform: uppercase;
  }

  > ul {
    display: flex;
    gap: 3.375rem;
    margin: 4rem 0;
    
    li {
      display: flex;
      align-items: center;

      span {
        margin-left: 1rem;
        font-weight: 600;
        font-size: 0.875rem;
      }
    }

    > span {
      font-weight: 600;
      font-size: 32px;
      transform: rotate(90deg);
      position: relative;
      right: -30px;
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    >div {
      display: flex;
      flex-direction: column;
      strong {
        font-weight: 600;
        font-size: 1.375rem;
        color: var(--gray-100);
      }
      span {
        white-space: normal;
        font-size: 0.75rem;
        line-height: 88.69%;
        letter-spacing: -0.04em;
        color: var(--gray-900);
        margin-top: 0.375rem;
        max-width: 7.5rem;
      }
    }
  }

  @media (max-width: 720px){
    > img {
      width: 570px;
    }
  }

  @media (max-width: 610px){
    white-space: normal;
    width: 100%;
    padding: 16px 0px 16px 16px;

    > img {
      width: 101%;
      height: 300px;
    }

    ul {
      li {
        white-space: nowrap;
      }
      > span {
        position: absolute;
        right: -5%;
      }
    }
  }

  @media (max-width: 1270px){
    gap: 2.5rem;
  }

  @media (max-width: 520px){
    ul {
      gap: 1.4rem;
      margin: 2rem 0;
      flex-direction: column;
      > span {
        right: -10%;
        font-size: 24px;
        top: 50%;
        bottom: 50%;
      }
    }
  }
`;
