import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > div {
    width: 100%;
    max-width: 37.5rem;

    >h1 {
      font-weight: 700;
      font-size: 2.25rem;
      color: var(--green);
    }

    >h2 {
      margin: 3.375rem 0;
      font-weight: 700;
      font-size: 2.875rem;
    }

    > p {
      font-weight: 400;
      font-size: 1.125rem;
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
      font-size: 1.125rem;
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

  @media (max-width: 1110px){
    flex-direction: column;
    > div {
      max-width: 28.125rem;
      >h1 {
        font-size: 1.75rem;
      }

      >h2 {
        font-size: 2rem;
      }

      > p {
        font-size: 1rem;
      }
    }
  }


  @media (max-width: 900px){
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 450px){
    padding: 1rem;
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