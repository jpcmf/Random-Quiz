import { createGlobalStyle } from 'styled-components';
import { ThemeType } from '../pages/_app';

type Props = {
  theme: ThemeType;
};

export default createGlobalStyle<Props>`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.contrastText};
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  // animations
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
