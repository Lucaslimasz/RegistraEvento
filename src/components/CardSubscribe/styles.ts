import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 100% !important;

  display: flex;
  justify-content: center;

  >img {
    margin: auto;
  }

  @media (max-width: 1250px){
    > img {
      width: 480px;
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
      margin: 3rem auto 0;
    }
  }

  @media (max-width: 450px){
    > img {
      width: 100%;
    }
  }

  position: relative;

  > h1 {
    position: absolute;
    bottom: 146px;
    left: 416px;
    font-size: 22px !important;
  }
`;
