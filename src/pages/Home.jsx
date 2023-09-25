import { Menu } from "../components/Menu";
import { Header } from "../components/Header";
import { CardsHeader } from "../components/CardsHeader";
import { Avantages } from "../components/Avantages";
import { Process } from "../components/Process";
import { Methods } from "../components/Methods";
import { Contact } from "../components/Contact";
import { Top } from "../components/Top";

export const Home = () => {
  return (
    <>
      <Menu />
      <Header />
      <CardsHeader />
      <Avantages />
      <Process />
      <Methods />
      <Contact />
      <Top />
    </>
  );
};
