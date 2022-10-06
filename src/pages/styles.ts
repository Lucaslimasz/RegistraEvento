import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem;

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

    margin: 4.375rem 0;
    
    li {
      display: flex;
      align-items: center;

      span {
        margin-left: 1rem;
        font-weight: 600;
        font-size: 0.875rem;
      }

      &+li {
        margin-left: 2.5rem;
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
      margin-top: 2rem;
    }

    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-top: 2.25rem;

      li {
        display: flex;
        flex-direction: column;
        margin: 0 1.625rem 1.125rem 0;
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
`;

export const Tag = styled.div`
  color: var(--gray-100);
  font-weight: 600;
  font-size: 2rem;
  border-left: 0.375rem solid var(--red);
  padding-left: 1.25rem;
  margin-bottom: 4.375rem;
`;