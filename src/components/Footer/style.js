import styled from "styled-components";
import { theme } from "../../style/theme";

export const ContainerFooter = styled.footer`
  margin-top: 8rem;
  width: 100%;

  padding:3rem 0rem;
  

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-top: 0.1rem solid ${theme.colors.prymary};
  background-color:${theme.colors.footerColor} ;

  

  h1 {
    color: ${theme.colors.prymary};
  }

  h3 {
    color: #fff;
    margin-bottom: 0.5rem;
}
h4{
    color: #ebdddd;
}
`;

export const FooterNetworks = styled.div`

padding-bottom: 0.75rem;

a{
    font-size: 1.8rem;
    color: #fff;
    padding: 0rem 0.6rem;
    cursor: pointer;
}
a:hover{
    filter: brightness(0.9);
    transition: 0.2s;
}


`