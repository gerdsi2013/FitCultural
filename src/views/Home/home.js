import { HomeContainer } from "./style";

import { Card } from "../../components/Card/card";

import ReactElasticCarousel from "react-elastic-carousel";

import { Footer } from "../../components/Footer/footer.js";

export function Home() {


  return (
    <HomeContainer>
      <h1>Processo seletivo - Fit cultural</h1>
      <ReactElasticCarousel>

        <Card question="O que você quer fazer pelo mundo?"
        response ="Quero fazer um mundo melhor fazendo com que pessoas possam ter mais empatia pelo o próximo, a desigualdade social deixe de existir pelo mundo, e que de fato todos tenham os mesmo direitos. Para que essa transformação possa ocorrer, cada pessoa tem que fazer a sua parte, sem esperá pelo o outro."
        ></Card>

        <Card question="Conta pra gente um desafio que você superou, e um ponto forte que te ajudou a lhe da com ele?"
        response="O desafio é sempre algo muito pessoal, e se tratando de algo pessoal, eu já superei o medo de altura, já superei o medo de ter sido vítima de roubo e assalto, e até morte na família, aonde um ponto forte que mim ajudou a superar tudo isso, foi poder continuar viver a vida. Mas hoje o desafio a qual quero superar, é trabalhar com tecnologia, e fazer parte desta grande empresa.">
        </Card>

        <Card question="O que te inspira no seu dia-dia de trabalho/estudo?"
        response="Desde de criança eu sempre fui muito apaixonado por tecnologia, e com o auxílio da tecnologia milhares e milhares de pessoas espalhada pelo mundo teve suas vidas transformadas. Sendo assim, a minha maior inspiração é saber que de alguma forma através dos meus estudo e muito trabalho, eu estarei contruibuindo para a evolução da humanidade.">

        </Card>
      </ReactElasticCarousel>

      <Footer></Footer>
    </HomeContainer>
  );
}
