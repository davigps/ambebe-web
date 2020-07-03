import React from "react";

import Header from "../../App/Header";
import logoamarela from "../../assets/logo-amarela.png";
// import { Container } from './styles';

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
            name: "Sobre a AMBEBE",
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
      <div style={{ marginTop: "100px" }}>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
