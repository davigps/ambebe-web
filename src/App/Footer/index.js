import React from "react";

import { Container, Text } from "./styles";

function Footer() {
  return (
    <Container>
      <Text>
        © {new Date().getFullYear()} Todos os direitos reservados | Ambebe
      </Text>
    </Container>
  );
}

export default Footer;
