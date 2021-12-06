import styled from "styled-components";
import { theme } from "../../style/theme";

export const Cards = styled.div`
  width: 100%;
  min-height: 60vh;
  background-color: rgba(255, 255, 255, 0.05);
  
  h1 {
    color: ${theme.colors.textQuestion};
    font-size: 1.5rem;
    text-align: left;
    padding: 1% 3%;
    text-align: justify;
    
  }
  p {
    color: ${theme.colors.textColor};
    font-size: 1.3rem;
    padding: 0% 5%;
    text-align: justify;

  }

  /* media queris */
  @media (max-width: 700px) {
    h1 {
      font-size: 1.4rem;
    }
    @media (max-width: 480px) {
      h1 {
        font-size: 1.2rem;
    
        
      }
    }
  }
`;
