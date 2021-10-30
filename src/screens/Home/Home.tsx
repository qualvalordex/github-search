import React from "react";
import { MdSearch } from "react-icons/md"

import { Container, Logo, TextInput, Button, HSpace } from "./styles";
import bigLogo from "../../assets/bigLogo.png";

const Home: React.FC = () => {
  return (
    <Container>
      <Logo src={bigLogo} />
      <TextInput placeholder="Enter username" />
      <Button>Search <HSpace /> <MdSearch size="20px" /></Button>
    </Container>
  );
};

export default Home;
