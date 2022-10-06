import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
  --dark: #000000;
  --dark-800: #1A1A1A;

  --red:  #C62A2A;
  --green: #60CF6E;

  --gray:  #E1E1E6;
  --gray-900: #A8A8B2;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

body {
  background-color: var(--dark);
  font-family: 'Roboto';
  color: var(--gray);

  .background {
    position: absolute;
    width: 100%;
    z-index: -1;
  }
}
  
  button{
    cursor: pointer;
    transition: filter .2s ease;
    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
  
  button, input, textarea {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;