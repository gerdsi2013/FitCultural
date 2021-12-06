import styled from "styled-components";
import { theme } from "../../style/theme";
import Imagem from "../../assets/background.jpg";

export const HomeContainer = styled.main`
  color: ${theme.colors.prymary};
  width: 100%;

  background-image: url(${Imagem});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  h1 {
    font-weight: 400;
    width: 100%;
    text-align: center;
    font-size: 3.5rem;
    padding: 3rem 1rem 2rem;
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
