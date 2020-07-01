import React from "react";

import Header from "../../App/Header";
// import { Container } from './styles';

function Home() {
  return (
    <>
      <Header
        title="Ambebe"
        links={[
          {
            name: "Contato",
            to: "/#contato",
          },
        ]}
      />
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
