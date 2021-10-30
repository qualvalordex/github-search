import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import { MdSearch } from "react-icons/md";

import { Container, Logo, TextInput, Button, HSpace } from "./styles";
import bigLogo from "../../assets/bigLogo.png";

const Home: React.FC = () => {
  const history = useHistory();
  const [username, setUsername] = useState<string>("");

  const handleChange = useCallback(
    ({ target }) => {
      setUsername(target.value);
    },
    [username]
  );

  const handleRedirect = useCallback(() => {
    history.push({
      pathname: "/profile",
      search: "",
      state: { username }
    });
  }, [username]);

  return (
    <Container>
      <Logo src={bigLogo} />
      <TextInput
        placeholder="Enter username"
        value={username}
        onChange={handleChange}
      />
      <Button onClick={handleRedirect}>
        Search <HSpace /> <MdSearch size="20px" />
      </Button>
    </Container>
  );
};

export default Home;
