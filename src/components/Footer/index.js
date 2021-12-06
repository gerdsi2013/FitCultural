import { ContainerFooter, FooterNetworks } from "../../components/Footer/style";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <ContainerFooter>
      <FooterNetworks>
        <a
          href="https://www.linkedin.com/in/gerdivaldossilva/"
          target="_blank "
        >
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href="https://github.com/gerdsi2013" 
        target="_blank "
        >
          <AiFillGithub></AiFillGithub>
        </a>
        <a href="https://www.instagram.com/gerdssilva/" target="_blank ">
          <AiFillInstagram></AiFillInstagram>
        </a>
      </FooterNetworks>

     {/* <h3>Termo de uso - politica de privacidade</h3> */}
     <h4>  2021 - Gerdivaldo Silva</h4>
      
    </ContainerFooter>
  );
}
