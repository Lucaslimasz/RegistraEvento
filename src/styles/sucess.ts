import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 32px;
  display: flex;
  align-items: center;

  >img {
    margin: auto;
  }


  > div {
    width: 100%;
    max-width: 600px;

    >h1 {
      font-weight: 700;
      font-size: 36px;
      color: var(--green);
    }

    >h2 {
      margin: 3.375rem 0;
      font-weight: 700;
      font-size: 46px;
    }

    > p {
      font-weight: 400;
      font-size: 18px;
      color: var(--gray-900);
      max-width: 70%;
    }
  }

  .network {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 36.875rem;
    
    p {
      font-weight: 400;
      font-size: 18px;
      color: var(--gray-900);
    }
    
    ul {
      display: flex;
      gap: 1.125rem;

      li {
        button {
          width: 3.75rem;
          height: 3.75rem;

          display: flex;
          justify-content: center;
          align-items: center;

          background: var(--dark-800);
          border-radius: 0.375rem;
        }
      }
    }
  }

  @media (max-width: 1250px){
    > img {
      width: 480px;
    }
  }

  @media (max-width: 1110px){
    > div {
      max-width: 28.125rem;
      >h1 {
        font-size: 28px;
      }

      >h2 {
        font-size: 32px;
      }

      > p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1000px){
    > img {
      width: 400px;
      margin: 0;
      margin-left: auto;
    }
  }

  @media (max-width: 900px){
    > img {
      margin: 0;
      margin-top: 3rem;
    }
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 450px){
    padding: 16px;
    > img {
      width: 100%;
    }
  }

  @media (max-width: 400px){
    .network {
      display: flex;
      justify-content: center;
      p {
        display: none;
      }
    }
  }
`;