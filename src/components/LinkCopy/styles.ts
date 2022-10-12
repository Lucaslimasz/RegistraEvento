import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 1.875rem;
  background-color: var(--dark-800);
  width: fit-content;
  gap: 1.125rem;
  
  display: flex;
  align-items: center;

  margin: 1.625rem 0 3.375rem 0;

  border-radius: 0.375rem;

  > button {
    background: none;
  }

  > p {
    font-weight: 400;
  }

  @media (max-width: 1110px){
    > p {
      word-break: break-word;
    }
  }
`;
