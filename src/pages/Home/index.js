import React from "react";

import Header from "../../App/Header";
import Footer from "../../App/Footer";
import HomeSection from "./components/HomeSection";
import DownloadBox from "./components/DownloadBox";
import logoamarela from "../../assets/logo-amarela.png";
import { Container } from "./styles";

function Home() {
  return (
    <>
      <Header
        logo={logoamarela}
        links={[
          {
            name: "Início",
            to: "/#inicio",
          },
          {
            name: "Sobre o AMBEBE",
            to: "/#sobre",
          },
          {
            name: "Locais",
            to: "/#locais",
          },
          {
            name: "Contato",
            to: "/#contato",
          },
        ]}
        actionButton={{
          name: "Download",
          to: "/#inicio",
        }}
      />
      <Container>
        <HomeSection />
        <DownloadBox />
        <Footer />
      </Container>
    </>
  );
}

export default Home;
