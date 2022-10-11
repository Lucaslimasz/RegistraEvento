import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 3rem;

  display: flex;
  justify-content: space-between;

  > div {
    max-width: 35rem;
    > h1 {
      font-size: 2.25rem;
    }
  > p {
    font-size: 1rem;
    color: var(--gray-900);
    margin-top: 0.75rem;
  }

  > ul {
    display: flex;
    gap: 2.5rem;
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
  }

  >div {
    >h2 {
      font-weight: 700;
      font-size: 1.125rem;
    }

    >h3 {
      font-weight: 800;
      font-size: 2rem;
      margin-top: 4rem;
    }

    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 2.25rem;
      gap: 1.5rem;

      li {
        display: flex;
        flex-direction: column;
        img {
          width: 3.125rem;
        }
        span {
          font-weight: 500;
          font-size: 0.875rem;
          margin-top: 0.75rem;
          max-width: 70%;
        }
      }
    }
    
  }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    input {
      padding: 1.75rem 2rem;
      font-size: 1rem;
      width: 100%;
      max-width: 30.25rem;
      border-radius: 0.5rem;
      &+input {
        margin-top: 1rem;
      }
      &+input[type="submit"] {
        margin-top: 1.875rem;
        background: var(--green);
        font-weight: 700;
        font-size: 1.125rem;
      }
    }
  }

  @media (max-width: 900px){
    padding: 3rem 1.5rem;
    flex-direction: column;

    >div {
      >ul {
        flex-wrap: wrap;
      }

      >div {
        h3 {
          margin-bottom: 1.25rem;
        }
      }
    }
  }
`;

export const Tag = styled.div`
  color: var(--gray-100);
  font-weight: 600;
  font-size: 2rem;
  border-left: 0.375rem solid var(--red);
  padding-left: 1.25rem;
  margin-bottom: 4.375rem;
`;